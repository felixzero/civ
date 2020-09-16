package fr.guilloy.civ.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CardCredit {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "serial")
    private Integer id;

    @ManyToOne
    @NotNull
    private CivilizationCard giver;

    @ManyToOne
    @NotNull
    private CivilizationCard receiver;

    @NotNull
    private Integer amount;
}
