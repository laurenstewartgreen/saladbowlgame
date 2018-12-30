package io.github.laurenstewartgreen.saladbowlgame.models;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Entity
public class Cards {

    private List<String> cards = new ArrayList<>();

    public Cards() {
    }

    public Cards(ArrayList<String> cards) {
        this.cards = cards;
    }

    public void add(String cardPhrase) {
        cards.add(cardPhrase);
    }

    public void shuffle() {
        Collections.shuffle(cards);
    }

}
