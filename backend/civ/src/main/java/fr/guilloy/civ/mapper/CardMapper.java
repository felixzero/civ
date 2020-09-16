package fr.guilloy.civ.mapper;

import fr.guilloy.civ.dto.CardDto;
import fr.guilloy.civ.model.CivilizationCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CardMapper {
    CivilizationCard fromDto(CardDto dto);

    // TODO
    @Mapping(target = "price", ignore = true)
    @Mapping(target = "status", ignore = true)
    CardDto toDto(CivilizationCard card);
}
