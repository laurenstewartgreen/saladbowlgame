import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../services/game.service';
import {WordsListService} from '../services/words-list.service';
import {Words} from '../models/words.model';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {
    private _id: number;
    private _currentPlayer: string;
    private _words: Array<string>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService,
              private wordsListService: WordsListService) {
    this._id = this.route.snapshot.params['id'];
    this._currentPlayer = this.route.snapshot.params['player'];
    this._words = this.route.snapshot.params['words'];
  }

  ngOnInit() {

  }

  nextView() {
    this.router.navigate(['/card', {id: this._id, words: this._words}]);
  }
}
