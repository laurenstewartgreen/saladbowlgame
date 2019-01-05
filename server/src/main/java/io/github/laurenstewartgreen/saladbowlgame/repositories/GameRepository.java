package io.github.laurenstewartgreen.saladbowlgame.repositories;

import io.github.laurenstewartgreen.saladbowlgame.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface GameRepository extends JpaRepository<Game, Long> {
}
