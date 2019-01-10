package io.github.laurenstewartgreen.saladbowlgame.entities;

import org.hibernate.annotations.Cascade;

import javax.persistence.Id;

import javax.persistence.*;


@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "game_id")
    private Long id;

    @Column(name = "game_letter")
    private char letter;

    @OneToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private WordsList words;

    @OneToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Team teamOne;

    @OneToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Team teamTwo;

    public Game() {
    }


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

    public void setId(Long id) {
        this.id = id;
    }

    public WordsList getWords() {
        return words;
    }

    public void setWords(WordsList words) {
        this.words = words;
    }

    public char getLetter() {
        return letter;
    }

    public void setLetter(char letter) {
        this.letter = letter;
    }
}
