package fr.guilloy.civ.dto;

import fr.guilloy.civ.constants.Civilization;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlayerCreationRequestDto {
    private String username;
    private Civilization civilization;
}
