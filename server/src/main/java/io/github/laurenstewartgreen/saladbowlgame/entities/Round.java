package io.github.laurenstewartgreen.saladbowlgame.entities;

import javax.persistence.Id;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="rounds")
public class Round {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "round_id")
    private Long id;

    @OneToOne
    private Words roundWords;

    @OneToOne
    private Player currentPlayer;


    public Round() {
    }

    public Player getCurrentPlayer() {
        return currentPlayer;
    }

    public void setCurrentPlayer(Player currentPlayer) {
        this.currentPlayer = currentPlayer;
    }

    public Words getRoundWords() {
        return roundWords;
    }

    public void setRoundWords(Words roundWords) {
        this.roundWords = roundWords;
    }

//    public void wordPlayed(Word word) {
//        this.roundWords.remove(word);
//    }

    public Long getId() {
        return id;
    }
}
