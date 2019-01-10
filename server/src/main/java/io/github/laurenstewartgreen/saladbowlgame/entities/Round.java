//package io.github.laurenstewartgreen.saladbowlgame.entities;
//
//import javax.persistence.Id;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name="rounds")
//public class Round {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "round_id")
//    private Long id;
//
//    @OneToOne
//    private WordsList roundWords;
//
//    @OneToOne
//    private Player currentPlayer;
//
//
//    public Round() {
//    }
//
//    public Player getCurrentPlayer() {
//        return currentPlayer;
//    }
//
//    public void setCurrentPlayer(Player currentPlayer) {
//        this.currentPlayer = currentPlayer;
//    }
//
//    public WordsList getRoundWords() {
//        return roundWords;
//    }
//
//    public void setRoundWords(WordsList roundWords) {
//        this.roundWords = roundWords;
//    }
//
////    public void wordPlayed(Word word) {
////        this.roundWords.remove(word);
////    }
//
//    public Long getId() {
//        return id;
//    }
//}
