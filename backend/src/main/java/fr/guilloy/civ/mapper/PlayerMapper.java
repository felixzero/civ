package fr.guilloy.civ.mapper;

import fr.guilloy.civ.dto.PlayerDto;
import fr.guilloy.civ.model.Player;
import org.mapstruct.Mapper;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface PlayerMapper {
    PlayerDto createDto(Player player);

    default String uuidToString(UUID uuid) {
        return uuid.toString();
    }
}
