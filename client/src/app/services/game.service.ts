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

  getGameById(id: number) {
    return this.http.get(this.GAME_API + '/' + id).toPromise()
      .then(returnResponse => {
        console.log(returnResponse);
      });
  }

  createGame(game: Game) {
    console.log(game.toJSON());
    this.http.post(this.GAME_API, JSON.parse(game.toJSON())).toPromise()
      .then(response => {
        console.log(response);
      });
  }
}
