package io.github.laurenstewartgreen.saladbowlgame.entities;

import javax.persistence.Id;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "game_id")
    private Long id;

    private char letter;

    @OneToOne
    private Words words;

    @OneToOne
    private Team teamOne;

    @OneToOne
    private Team teamTwo;

    public Game() {
    }

//    public void addPlayer(Player player, Team team) {
//
//        team.addPlayer(player);
//    }
//
//    public void addPlayerRandomly(Player player) {
//        if(teamOne.teamSize() <= teamTwo.teamSize()) {
//            addPlayer(player, teamOne);
//        } else {
//            addPlayer(player,teamTwo);
//        }
//    }

//    public void addPlayerListRandomly(List<Player> players) {
//        for(Player p : players)
//            addPlayerRandomly(p);
//    }

    public Team getTeamOne() {
        return teamOne;
    }

    public void setTeamOne(Team teamOne) {
        this.teamOne = teamOne;
    }

    public Team getTeamTwo() {
        return teamTwo;
    }

    public void setTeamTwo(Team teamTwo) {
        this.teamTwo = teamTwo;
    }

    public Long getId() {
        return id;
    }

    public Words getWords() {
        return words;
    }

    public void setWords(Words words) {
        this.words = words;
    }

    public char getLetter() {
        return letter;
    }

    public void setLetter(char letter) {
        this.letter = letter;
    }
}
