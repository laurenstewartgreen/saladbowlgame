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
    private WordsList list;

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

    public WordsList getList() {
        return list;
    }

    public void setList(WordsList list) {
        this.list = list;
    }

    @Override
    public String toString() {
        return "Word{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", list=" + list +
                '}';
    }
}
