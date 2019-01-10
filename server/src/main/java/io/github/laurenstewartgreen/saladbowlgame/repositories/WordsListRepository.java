package io.github.laurenstewartgreen.saladbowlgame.repositories;

import io.github.laurenstewartgreen.saladbowlgame.entities.WordsList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface WordsListRepository extends JpaRepository<WordsList, Long> {
}
