package io.github.laurenstewartgreen.saladbowlgame.controllers;

import io.github.laurenstewartgreen.saladbowlgame.entities.Game;
import io.github.laurenstewartgreen.saladbowlgame.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GameController {

    private GameRepository gameRepository;

    @Autowired
    public GameController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @PostMapping("/games")
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
        System.out.println("hello");
        return new ResponseEntity<>(this.gameRepository.save(game), HttpStatus.CREATED);
    }

    @GetMapping("/games")
    public ResponseEntity<List<Game>> getAllGames() {
        return new ResponseEntity<>(this.gameRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/games/{id}")
    public ResponseEntity<Game> getGame(@PathVariable Long id) {
        return new ResponseEntity<>(this.gameRepository.findById(id).get(), HttpStatus.OK);
    }

    @PutMapping("/games/{id}")
    public ResponseEntity<Game> updateGame(@PathVariable Long id, @RequestBody Game game) {
        return new ResponseEntity<>(this.gameRepository.save(game), HttpStatus.CREATED);
    }

    @DeleteMapping("/games/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        this.gameRepository.deleteById(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
