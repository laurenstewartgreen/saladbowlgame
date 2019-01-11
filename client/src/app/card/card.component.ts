import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../services/game.service';
import {Game} from '../models/game.model';
import {Words} from '../models/words.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _id: number;
  private _game: Game;
  private _wordsList: Array<string>;
  private _currentWord: string;
  private _allDataFetched = false;
  private _size: number;
  private _words: string;
  private _points = 0;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService) {
    this._id = this.route.snapshot.params['id'];
    this._words = this.route.snapshot.params['words'];
    this._wordsList = new Array<string>();
    this.toArray(this._words);
    this._wordsList = this.shuffle(this._wordsList);
    this._currentWord = this._wordsList.pop();
    this._allDataFetched = true;
    this.refreshView();
  }

  ngOnInit() {
    // this.gameService.getGameById(this._id)
    //   .then(response => {
    //
    //     console.log(response);
    //     this._game = <Game> response;
    //     this._wordsList = this._game.words;
    //     console.log(this._wordsList);
    //     this._size = this._wordsList.size();
    //     console.log('The size: ');
    //     console.log(this._size);
    //     this._currentWord = this._wordsList.getWord(Math.floor(Math.random() * (this._wordsList.size() + 1)));
    //     this._allDataFetched = true;
    //     this.refreshView();
    //   });
  }

  refreshView() {
    this.router.navigate(['/card']);
  }

  shuffle(array: Array<string>): Array<string> {
    let count = array.length;
    console.log(count);
    let temp;
    let index;
// While there are elements in the array
    while (count > 0) {
// Pick a random index
      index = Math.floor(Math.random() * count);
      console.log(index);
// Decrease ctr by 1
      count--;
// And swap the last element with it
      temp = array[count];
      array[count] = array[index];
      array[index] = temp;
    }
    return array;
  }

  toArray(str: string) {
    for (const word of str.split(',')) {
      this._wordsList.push(word);
    }
  }

  scoreWord() {
    this._points++;
    if (this._wordsList.length > 0) {
      this._wordsList = this.shuffle(this._wordsList);
      this._currentWord = this._wordsList.pop();
      this.refreshView();
    } else {
      this.router.navigate(['/scoreboard', {id: this._id, score: this._points, words: this._words}]);
    }
  }

  passWord() {
    this._points--;
    this._wordsList.push(this._currentWord);
    if (this._wordsList.length > 0) {
      this._wordsList = this.shuffle(this._wordsList);
      this._currentWord = this._wordsList.pop();
      this.refreshView();
    } else {
      this.router.navigate(['/scoreboard', {id: this._id, score: this._points, words: this._words}]);
    }
  }

}
