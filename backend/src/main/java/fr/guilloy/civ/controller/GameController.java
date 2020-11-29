package fr.guilloy.civ.controller;

import fr.guilloy.civ.dto.PlayerCreationRequestDto;
import fr.guilloy.civ.dto.PlayerDto;
import fr.guilloy.civ.mapper.PlayerMapper;
import fr.guilloy.civ.model.Game;
import fr.guilloy.civ.model.Player;
import fr.guilloy.civ.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("games")
@RequiredArgsConstructor
public class GameController {
    private final GameRepository gameRepository;
    private final PlayerMapper playerMapper;

    @PostMapping
    @CrossOrigin
    public String createGame() {
        Game game = Game.builder().slug(RandomStringUtils.randomAlphanumeric(10)).build();
        gameRepository.save(game);
        return game.getSlug();
    }

    @GetMapping("/{slug}/players")
    @CrossOrigin
    public List<PlayerDto> getPlayersInGame(@PathVariable String slug) {
        return getGameFromSlug(slug)
                .getPlayers()
                .stream()
                .map(playerMapper::createDto)
                .collect(Collectors.toList());
    }

    @PostMapping("/{slug}/add-player")
    @CrossOrigin
    public List<PlayerDto> addPlayerInGame(@PathVariable String slug, @RequestBody PlayerCreationRequestDto request) {
        Game game = getGameFromSlug(slug);
        game.addPlayer(Player
                .builder()
                .username(request.getUsername())
                .civilization(request.getCivilization())
                .build());
        gameRepository.save(game);

        return getPlayersInGame(slug);
    }

    private Game getGameFromSlug(String slug) {
        return gameRepository
                .findBySlug(slug)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "The game was not found"));
    }
}