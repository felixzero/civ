package fr.guilloy.civ.dto;

import fr.guilloy.civ.constants.CardStatus;
import fr.guilloy.civ.constants.CardType;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CardDto {
    private String cardName;
    private CardType cardType;
    private Integer faceValue;
    private Integer price;
    private CardStatus status;
    private String requires;
}
