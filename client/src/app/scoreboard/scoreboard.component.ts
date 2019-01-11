import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../services/game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  private _id: any;
  private _words: any;
  private _scoreTeamOne = 0;
  private _scoreTeamTwo = 0;
  private _statement = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService) {
    this._id = this.route.snapshot.params['id'];
    this._words = this.route.snapshot.params['words'];
    this._scoreTeamOne = this.route.snapshot.params['score'];
    this.determineWinner();
  }

  ngOnInit() {
  }

  determineWinner() {
    if (this._scoreTeamOne > this._scoreTeamTwo) {
      this._statement = 'Team One is Winning!';
    } else {
      this._statement = 'Team Two is Winning!';

    }
  }

}
