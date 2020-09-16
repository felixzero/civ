package fr.guilloy.civ.repository;

import fr.guilloy.civ.model.CivilizationCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CivilizationCardRepository extends JpaRepository<CivilizationCard, String> {
}
