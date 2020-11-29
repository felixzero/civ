package fr.guilloy.civ.model;

import fr.guilloy.civ.constants.CardType;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CivilizationCard {
    @Id
    private String cardName;

    private Integer faceValue;

    @Enumerated(EnumType.STRING)
    private CardType cardType;
}
