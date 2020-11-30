package fr.guilloy.civ.model;

import fr.guilloy.civ.constants.Civilization;
import lombok.*;

import javax.persistence.*;
import java.util.*;
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
    private Set<CivilizationCard> boughtCards;

    public Collection<CivilizationCard> getBoughtCards() {
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

    public void addCards(Collection<CivilizationCard> cards) {
        if (boughtCards == null) {
            boughtCards = new HashSet<>(cards);
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
                .collect(Collectors.toSet());
    }
}
