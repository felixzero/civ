package fr.guilloy.civ.repository;

import fr.guilloy.civ.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface GameRepository extends JpaRepository<Game, UUID> {
    Optional<Game> findBySlug(String slug);
}
