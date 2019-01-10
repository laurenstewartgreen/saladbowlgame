package io.github.laurenstewartgreen.saladbowlgame.entities;

import javax.persistence.Id;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="word_lists")
public class WordsList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "word_list_id")
    private Long id;

    @OneToMany(targetEntity=Word.class, mappedBy = "word", fetch=FetchType.EAGER)
    private Set<Word> words;

    public WordsList() {
    }

    public WordsList(Set<Word> words) {
        this.words = words;
    }

    public void add(Word word) {
        words.add(word);
    }

    public Long getId() {
        return id;
    }
}
