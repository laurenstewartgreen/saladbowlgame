package io.github.laurenstewartgreen.saladbowlgame.controllers;

import io.github.laurenstewartgreen.saladbowlgame.entities.Player;
import io.github.laurenstewartgreen.saladbowlgame.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {

    private PlayerRepository playerRepository;

    @Autowired
    public PlayerController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @PostMapping("/players")
    public ResponseEntity<Player> createPlayer(@RequestBody Player player) {
        return new ResponseEntity<>(this.playerRepository.save(player), HttpStatus.CREATED);
    }

    @GetMapping("/players")
    public ResponseEntity<List<Player>> getAllPlayers() {
        return new ResponseEntity<>(this.playerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/players/{id}")
    public ResponseEntity<Player> getPlayer(@PathVariable Long id) {
        return new ResponseEntity<>(this.playerRepository.findById(id).get(), HttpStatus.OK);
    }

    @PutMapping("/players/{id}")
    public ResponseEntity<Player> updatePlayer(@PathVariable Long id, @RequestBody Player player) {
        return new ResponseEntity<>(this.playerRepository.save(player), HttpStatus.CREATED);
    }

    @DeleteMapping("/players/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        this.playerRepository.deleteById(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
