package io.github.laurenstewartgreen.saladbowlgame.entities;

import org.hibernate.annotations.CollectionType;

import javax.persistence.Id;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "team_id")
    private Long id;

    @Column(name = "team_name")
    private String teamName;

    @Column(name = "team_score")
    private int teamScore;

    @ElementCollection
    @Column(name = "team_players")
    private List<String> players;

    public Team() {}

    public int getTeamScore() {
        return teamScore;
    }

    public void setTeamScore(int teamScore) {
        this.teamScore = teamScore;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public List<String> getPlayers() {
        return players;
    }

    public void setPlayers(List<String> players) {
        this.players = players;
    }
}
