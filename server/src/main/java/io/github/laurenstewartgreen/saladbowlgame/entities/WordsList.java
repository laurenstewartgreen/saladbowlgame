package io.github.laurenstewartgreen.saladbowlgame.entities;

import javax.persistence.Id;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="word_lists")
public class WordsList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "word_list_id")
    private Long id;

    @ElementCollection
    @Column(name = "word_list")
    private List<String> words;

    public WordsList() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<String> getWords() {
        return words;
    }

    public void setWords(List<String> words) {
        this.words = words;
    }

    public Long getId() {
        return id;
    }
}
