package io.github.laurenstewartgreen.saladbowlgame.entities;

import javax.persistence.*;

@Entity
public class Word {

    @Id
    @GeneratedValue
    @Column(name="word_id")
    private Long id;

    @Column(name="word")
    private String word;

    @ManyToOne
    private Words list;

    public Word() {
    }

    public Long getId() {
        return id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public Words getList() {
        return list;
    }

    public void setList(Words list) {
        this.list = list;
    }
}
