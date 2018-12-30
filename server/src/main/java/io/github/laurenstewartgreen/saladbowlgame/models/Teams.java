package io.github.laurenstewartgreen.saladbowlgame.models;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

@Entity
public class Teams {

    private List<Player> teamOne = new ArrayList<>();
    private List<Player> teamTwo = new ArrayList<>();
    private TreeMap<Integer, List<Player>> teams = new TreeMap<>();


    public void addPlayer(Player player, Integer team) {
        teams.get(team).add(player);
    }

    public void addPlayerRandomly(Player player) {
        if(teams.get(1).size() <= teams.get(2).size()) {
            addPlayer(player, 1);
        } else {
            addPlayer(player,2);
        }
    }

    public void addPlayerListRandomly(List<Player> players) {
        for(Player p : players)
            addPlayerRandomly(p);
    }
}
