package io.github.laurenstewartgreen.saladbowlgame.entities;

import javax.persistence.Id;

import javax.persistence.*;

@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "player_id")
    private Long id;

    @Column(name = "player_name")
    private String name;

    @Column(name = "player_score")
    private int score;

    @ManyToOne(targetEntity=Team.class, fetch=FetchType.EAGER)
    private Team team;

    public Player(String name) {
        this.name = name;
    }

    public Player() {
        new Player("Player " + id);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Long getId() {
        return id;
    }
}
