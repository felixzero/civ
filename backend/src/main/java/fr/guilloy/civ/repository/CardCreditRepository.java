package fr.guilloy.civ.repository;

import fr.guilloy.civ.constants.Civilization;
import fr.guilloy.civ.model.CardCredit;
import fr.guilloy.civ.model.CivilizationCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface CardCreditRepository extends JpaRepository<CardCredit, Integer> {
    @Query("select sum(c.amount) from CardCredit c where c.receiver = :receiver and c.giver in :hand")
    Optional<Integer> getCreditsOfCard(Collection<CivilizationCard> hand, CivilizationCard receiver);
}
