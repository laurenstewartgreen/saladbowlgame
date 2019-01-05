package io.github.laurenstewartgreen.saladbowlgame.controllers;

import io.github.laurenstewartgreen.saladbowlgame.entities.Word;
import io.github.laurenstewartgreen.saladbowlgame.entities.Words;
import io.github.laurenstewartgreen.saladbowlgame.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class WordController {

    private WordRepository wordRepository;

    @Autowired
    public WordController(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    @PostMapping("/word")
    public ResponseEntity<Word> createWords(@RequestBody Word word) {
        return new ResponseEntity<>(this.wordRepository.save(word), HttpStatus.CREATED);
    }

    @GetMapping("/word/{id}")
    public ResponseEntity<Word> getWords(@PathVariable Long id) {
        return new ResponseEntity<>(this.wordRepository.findById(id).get(), HttpStatus.OK);
    }

    @PutMapping("/word/{id}")
    public ResponseEntity<Word> updateWords(@PathVariable Long id, @RequestBody Word word) {
        return new ResponseEntity<>(this.wordRepository.save(word), HttpStatus.CREATED);
    }

    @DeleteMapping("/word/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        this.wordRepository.deleteById(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
