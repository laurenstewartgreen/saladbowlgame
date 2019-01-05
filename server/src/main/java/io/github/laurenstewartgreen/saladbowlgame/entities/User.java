package io.github.laurenstewartgreen.saladbowlgame.entities;


import javax.persistence.Id;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long id;

    public User() {
    }

    public Long getId() {
        return id;
    }
}
