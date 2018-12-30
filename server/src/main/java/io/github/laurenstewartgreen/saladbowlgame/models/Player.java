package io.github.laurenstewartgreen.saladbowlgame.models;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Player {

    private String name;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public Player(String name) {
        this.name = name;
    }

    public Player() {
        new Player("Player " + id);
    }

}
