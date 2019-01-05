package io.github.laurenstewartgreen.saladbowlgame.repositories;


import io.github.laurenstewartgreen.saladbowlgame.entities.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface WordRepository extends JpaRepository<Word, Long> {
}
