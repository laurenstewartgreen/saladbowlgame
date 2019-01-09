import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Game} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public API = '//localhost:8080';
  public GAME_API = this.API + '/games';


  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(this.GAME_API + '/' + id);
  }

  create(game: Game) {
    console.log('Should print something after this');
    this.http.get('http://localhost:8080/games').toPromise()
      .then(returnResponse => {
        console.log(returnResponse);
    });
    console.log('The JSON:');

    console.log(JSON.stringify(game));
    // let result: Observable<Object>;

    this.http.post('http://localhost:8080/games', JSON.stringify(game)).toPromise()
      .then(response => {
        console.log(response);
      });
    // return result;
  }
}
