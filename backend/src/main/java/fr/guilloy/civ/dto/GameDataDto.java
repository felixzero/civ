package fr.guilloy.civ.dto;

import fr.guilloy.civ.constants.CardType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GameDataDto {
    private String cardName;
    private Integer faceValue;
    private CardType cardType;
    private Set<CreditDto> credits;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    static public class CreditDto {
        private String giver;
        private Integer amount;
    }
}
