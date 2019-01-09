package io.github.laurenstewartgreen.saladbowlgame.entities;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.Id;
import javax.persistence.*;
import java.util.Collections;
import java.util.Set;

@Entity
@Table(name="word_lists")
public class Words {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "word_list_id")
    private Long id;

    @OneToMany(targetEntity=Word.class, mappedBy = "word", fetch=FetchType.EAGER)
    private Set<Word> words;

    public Words() {
    }

    public Words(Set<Word> words) {
        this.words = words;
    }

    public void add(Word word) {
        words.add(word);
    }

    public Long getId() {
        return id;
    }
}
