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

  getGameById(id: number): Promise<any> {
    return this.http.get(this.GAME_API + '/' + id).toPromise();
  }

  getAllGames(): Promise<any> {
    return this.http.get(this.GAME_API).toPromise();
  }

  createGame(game: Game): Promise<any> {
    return this.http.post(this.GAME_API, JSON.parse(game.toJSON())).toPromise();
  }

  updateGame(game: Game): Promise<any> {
    return this.http.put((this.GAME_API + '/' + game.id), JSON.parse(JSON.stringify(game))).toPromise();
  }
}
