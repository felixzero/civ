package fr.guilloy.civ.service;

import fr.guilloy.civ.constants.CardStatus;
import fr.guilloy.civ.dto.CardDto;
import fr.guilloy.civ.mapper.CardMapper;
import fr.guilloy.civ.model.CivilizationCard;
import fr.guilloy.civ.model.Player;
import fr.guilloy.civ.repository.CardCreditRepository;
import fr.guilloy.civ.repository.CivilizationCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CreditCalculatorService {
    private final CivilizationCardRepository civilizationCardRepository;
    private final CardCreditRepository cardCreditRepository;
    private final CardMapper cardMapper;

    public List<CardDto> cardsOfPlayer(Player player) {
        var alreadyBoughtCards = player.getBoughtCards();

        return civilizationCardRepository
                .findAll()
                .stream()
                .map(cardInGame -> setPriceAndStatus(cardInGame, alreadyBoughtCards))
                .collect(Collectors.toList());
    }

    private CardDto setPriceAndStatus(CivilizationCard cardInGame, Collection<CivilizationCard> alreadyBoughtCards) {
        CardDto cardDto = cardMapper.toDto(cardInGame);
        boolean alreadyInHand = alreadyBoughtCards.stream().anyMatch(alreadyBought -> alreadyBought.getCardName().equals(cardDto.getCardName()));
        cardDto.setStatus(alreadyInHand ? CardStatus.BOUGHT : CardStatus.UNSELECTED);

        int calculatedPrice = cardInGame.getFaceValue() - cardCreditRepository.getCreditsOfCard(alreadyBoughtCards, cardInGame).orElse(0);
        cardDto.setPrice(Math.max(calculatedPrice, 0));
        return cardDto;
    }
}
