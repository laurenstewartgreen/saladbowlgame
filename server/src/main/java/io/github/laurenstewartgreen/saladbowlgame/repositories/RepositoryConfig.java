package io.github.laurenstewartgreen.saladbowlgame.repositories;

import io.github.laurenstewartgreen.saladbowlgame.entities.Game;
import io.github.laurenstewartgreen.saladbowlgame.entities.Team;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Game.class);
        config.exposeIdsFor(Team.class);
    }
}


