package fr.guilloy.civ.repository;

import fr.guilloy.civ.model.CivilizationCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CivilizationCardRepository extends JpaRepository<CivilizationCard, String> {
    Optional<CivilizationCard> findByCardName(String cardName);
}
