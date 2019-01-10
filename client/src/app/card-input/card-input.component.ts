import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../services/game.service';
import {Game} from '../models/game.model';
import {WordsListService} from '../services/words-list.service';
import {Words} from '../models/words.model';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
    private _game: Game;
    private _letter = '';
    private _id: number;
    private _allDataFetched = false;
    private _players: Array<string>;
    private _words: Array<string>;
    private _currentPlayer: string;
    private _nextPlayer: string;
    private _newWords: string;
    private i = 1;
    private _wordsList: Words;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService,
              private wordsListService: WordsListService) {
    this._id = this.route.snapshot.params['id'];
    this._players = new Array<string>();
    this._words = new Array<string>();
    this._wordsList = new Words();
  }

  ngOnInit() {
    console.log('Id: ' + this._id);
    this.gameService.getAllGames()
      .then(response => {
        console.log(response);
        this._game = <Game> response;
        this._letter = this._game[0].letter;
        this._players = this._game[0].teamOne.players;
        this._players = this._players.concat(this._game[0].teamTwo.players);
        this._currentPlayer = this._players[0];
        this._nextPlayer = this._players[1] + ' is next';
        this._allDataFetched = true;
        this.refreshView();
      });
  }

  refreshView() {
    this.router.navigate(['/card-input']);
  }

  addWords() {
    if (this._nextPlayer !== 'Start the Game') {
      for (const word of this._newWords.split('\n')) {
        this._words.push(word);
      }
      this._currentPlayer = this._players[this.i];
      this.i++;
      if (this.i < this._players.length) {
        this._nextPlayer = this._players[this.i] + ' is next';
        this._newWords = '';
        this.refreshView();
      } else {
        this._nextPlayer = 'Start the Game';
        this._newWords = '';
        this.refreshView();
      }
    } else {
      this._wordsList.wordsList = this._words;
      this.wordsListService.createWordsList(this._wordsList);
      this._game[0].words = this._wordsList;
      this.gameService.updateGame(this._game[0]);
      this.router.navigate(['/turn']);
    }
  }

  get game(): Game {
    return this._game;
  }

  set game(value: Game) {
    this._game = value;
  }

  get letter(): string {
    return this._letter;
  }

  set letter(value: string) {
    this._letter = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get allDataFetched(): boolean {
    return this._allDataFetched;
  }

  set allDataFetched(value: boolean) {
    this._allDataFetched = value;
  }
}
