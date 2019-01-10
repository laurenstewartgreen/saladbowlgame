package io.github.laurenstewartgreen.saladbowlgame.controllers;

import io.github.laurenstewartgreen.saladbowlgame.entities.WordsList;
import io.github.laurenstewartgreen.saladbowlgame.repositories.WordsListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WordsListController {

    private WordsListRepository wordsListRepository;

    @Autowired
    public WordsListController(WordsListRepository wordsListRepository) {
        this.wordsListRepository = wordsListRepository;
    }

    @PostMapping("/words")
    public ResponseEntity<WordsList> createWordsList(@RequestBody WordsList words) {
        return new ResponseEntity<>(this.wordsListRepository.save(words), HttpStatus.CREATED);
    }

    @GetMapping("/words")
    public ResponseEntity<List<WordsList>> getAllWordLists() {
        return new ResponseEntity<>(this.wordsListRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/words/{id}")
    public ResponseEntity<WordsList> getWordsList(@PathVariable Long id) {
        return new ResponseEntity<>(this.wordsListRepository.findById(id).get(), HttpStatus.OK);
    }

    @PutMapping("/words/{id}")
    public ResponseEntity<WordsList> updateWordsList(@PathVariable Long id, @RequestBody WordsList Words) {
        return new ResponseEntity<>(this.wordsListRepository.save(Words), HttpStatus.CREATED);
    }

    @DeleteMapping("/words/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        this.wordsListRepository.deleteById(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}

