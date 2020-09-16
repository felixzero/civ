package fr.guilloy.civ.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String slug;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Player> players;

    public void addPlayer(Player player) {
        if (players == null) {
            players = List.of(player);
        }
        players.add(player);
    }
}
