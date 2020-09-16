package fr.guilloy.civ.model;

import fr.guilloy.civ.constants.Civilization;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String username;

    private Civilization civilization;

    @ManyToMany
    private List<CivilizationCard> boughtCards;

    public List<CivilizationCard> getBoughtCards() {
        if (boughtCards == null) {
            return List.of();
        }

        return boughtCards;
    }

    public Integer getScore() {
        if (boughtCards == null) {
            return 0;
        }

        return boughtCards.stream().map(CivilizationCard::getFaceValue).reduce(0, Integer::sum);
    }

    public void addCards(List<CivilizationCard> cards) {
        if (boughtCards == null) {
            boughtCards = cards;
        } else {
            boughtCards.addAll(cards);
        }
    }

    public void removeCard(String cardName) {
        if (boughtCards == null) {
            return;
        }

        boughtCards = boughtCards
                .stream()
                .filter(card -> !card.getCardName().equals(cardName))
                .collect(Collectors.toList());
    }
}
