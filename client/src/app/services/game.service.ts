import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public API = '//localhost:8080';
  public GAME_API = this.API + '/game';


  constructor(private http: HttpClient) { }

  getGameById(id: number): Game {
    let game = new Game();
    this.http.get(this.GAME_API + '/' + id).toPromise()
      .then(response => {
        console.log(response);
        game = <Game> response;
      });
    return game;
  }

  getAllGames(): Promise<any> {
    return this.http.get(this.GAME_API).toPromise();
  }

  createGame(game: Game) {
    console.log(game.toJSON());
    this.http.post(this.GAME_API, JSON.parse(game.toJSON())).toPromise()
      .then(response => {
        console.log(response);
        game = <Game> response;
        console.log(game);
      });
  }

  updateGame(game: Game) {
    console.log(game.jsonWithId());
    // this.http.put((this.GAME_API + '/' + game.id), JSON.parse(game.toJSONwithId())).toPromise()
    //   .then(response => {
    //     console.log(response);
    //     game = <Game> response;
    //     console.log(game);
    //   });
  }
}
