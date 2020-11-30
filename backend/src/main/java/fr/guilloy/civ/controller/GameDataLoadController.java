package fr.guilloy.civ.controller;

import fr.guilloy.civ.dto.GameDataDto;
import fr.guilloy.civ.mapper.GameDataMapper;
import fr.guilloy.civ.repository.CardCreditRepository;
import fr.guilloy.civ.repository.CivilizationCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("game-data")
@RequiredArgsConstructor
@CrossOrigin
public class GameDataLoadController {
    private final CivilizationCardRepository civilizationCardRepository;
    private final CardCreditRepository cardCreditRepository;
    private final GameDataMapper gameDataMapper;

    @PutMapping
    @CrossOrigin
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void loadGameData(@RequestBody List<GameDataDto> gameData) {
        cardCreditRepository.deleteAll();

        gameData.forEach(card -> {
            civilizationCardRepository
                    .findByCardName(card.getCardName())
                    .ifPresentOrElse(alreadyExistingEntity -> {
                        alreadyExistingEntity.setCardType(card.getCardType());
                        alreadyExistingEntity.setFaceValue(card.getFaceValue());
                        civilizationCardRepository.save(alreadyExistingEntity);
                    },
                    () -> {
                        var cardEntity = gameDataMapper.getCard(card);
                        civilizationCardRepository.save(cardEntity);
                    });
        });

        gameData.forEach(card -> {
            var receiver = civilizationCardRepository
                    .findByCardName(card.getCardName())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, card.getCardName()));

            card.getCredits().forEach(credit -> {
                var creditEntity = gameDataMapper.getCredit(receiver, credit);
                creditEntity.setGiver(
                        civilizationCardRepository
                                .findByCardName(credit.getGiver())
                                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, credit.getGiver()))
                );
                cardCreditRepository.save(creditEntity);
            });
        });
    }
}
