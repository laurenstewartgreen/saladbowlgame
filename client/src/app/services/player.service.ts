import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from '../models/game.model';
import {Player} from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public API = '//localhost:8080';
  public PLAYER_API = this.API + '/players';

  constructor(private http: HttpClient) { }

  getPlayerById(id: number) {
    return this.http.get(this.PLAYER_API + '/' + id).toPromise()
      .then(response => {
        console.log(response);
      });
  }

  getAllPlayers() {
    this.http.get(this.PLAYER_API).toPromise()
      .then(response => {
        console.log(response);
      });
  }

  createPlayer(player: Player) {
    this.http.post(this.PLAYER_API, JSON.parse(player.toJSON())).toPromise()
      .then(response => {
        console.log(response);
      });
  }

}
