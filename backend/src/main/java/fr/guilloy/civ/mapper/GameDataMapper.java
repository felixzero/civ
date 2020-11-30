package fr.guilloy.civ.mapper;

import fr.guilloy.civ.dto.GameDataDto;
import fr.guilloy.civ.model.CardCredit;
import fr.guilloy.civ.model.CivilizationCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface GameDataMapper {
    CivilizationCard getCard(GameDataDto gameDataDto);

    @Mapping(target = "amount", source = "creditDto.amount")
    @Mapping(target = "giver",  ignore = true)
    CardCredit getCredit(CivilizationCard receiver, GameDataDto.CreditDto creditDto);
}
