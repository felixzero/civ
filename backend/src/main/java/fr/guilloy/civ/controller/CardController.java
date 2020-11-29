package fr.guilloy.civ.controller;

import fr.guilloy.civ.constants.CardStatus;
import fr.guilloy.civ.dto.CardDto;
import fr.guilloy.civ.mapper.CardMapper;
import fr.guilloy.civ.model.CivilizationCard;
import fr.guilloy.civ.model.Player;
import fr.guilloy.civ.repository.CivilizationCardRepository;
import fr.guilloy.civ.repository.PlayerRepository;
import fr.guilloy.civ.service.CreditCalculatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("cards")
@RequiredArgsConstructor
@CrossOrigin
public class CardController {
    private final CreditCalculatorService creditCalculatorService;
    private final PlayerRepository playerRepository;
    private final CardMapper cardMapper;

    @GetMapping("/{playerId}")
    @CrossOrigin
    public List<CardDto> getCardsOfPlayer(@PathVariable UUID playerId) {
        return creditCalculatorService.cardsOfPlayer(playerFromId(playerId));
    }

    @PostMapping("/{playerId}")
    @CrossOrigin
    public List<CardDto> checkoutPlayer(@PathVariable UUID playerId, @RequestBody List<CardDto> cards) {
        Player player = playerFromId(playerId);
        player.addCards(cards.stream().map(cardMapper::fromDto).collect(Collectors.toList()));
        playerRepository.save(player);

        return creditCalculatorService.cardsOfPlayer(player);
    }

    @DeleteMapping("/{playerId}/{cardName}")
    @CrossOrigin
    public List<CardDto> deleteCardFromHand(@PathVariable UUID playerId, @PathVariable String cardName) {
        Player player = playerFromId(playerId);
        player.removeCard(cardName);
        playerRepository.save(player);

        return creditCalculatorService.cardsOfPlayer(player);
    }

    private Player playerFromId(UUID id) {
        return playerRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player is not found"));
    }
}
