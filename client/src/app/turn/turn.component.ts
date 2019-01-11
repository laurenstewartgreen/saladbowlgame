import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../services/game.service';
import {WordsListService} from '../services/words-list.service';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {
    private _id: number;
    private _currentPlayer: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService,
              private wordsListService: WordsListService) {
    this._id = this.route.snapshot.params['id'];
    this._currentPlayer = this.route.snapshot.params['player'];

  }

  ngOnInit() {

  }

}
