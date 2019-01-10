package io.github.laurenstewartgreen.saladbowlgame.controllers;

import io.github.laurenstewartgreen.saladbowlgame.entities.Team;
import io.github.laurenstewartgreen.saladbowlgame.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TeamController {

    private TeamRepository teamRepository;

    @Autowired
    public TeamController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @PostMapping("/team")
    public ResponseEntity<Team> createTeam(@RequestBody Team team) {
        return new ResponseEntity<>(this.teamRepository.save(team), HttpStatus.CREATED);
    }

    @GetMapping("/team")
    public ResponseEntity<List<Team>> getAllTeams() {
        return new ResponseEntity<>(this.teamRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/team/{id}")
    public ResponseEntity<Team> getTeam(@PathVariable Long id) {
        return new ResponseEntity<>(this.teamRepository.findById(id).get(), HttpStatus.OK);
    }

    @PutMapping("/team/{id}")
    public ResponseEntity<Team> updateTeam(@PathVariable Long id, @RequestBody Team team) {
        return new ResponseEntity<>(this.teamRepository.save(team), HttpStatus.CREATED);
    }

    @DeleteMapping("/team/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        this.teamRepository.deleteById(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
