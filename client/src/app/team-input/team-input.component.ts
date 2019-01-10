import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from '../models/team.model';
import { Game } from '../models/game.model';
import {GameService} from '../services/game.service';
import {TeamService} from '../services/team.service';
import {CardInputComponent} from '../card-input/card-input.component';

@Component({
  selector: 'app-team-input',
  templateUrl: './team-input.component.html',
  styleUrls: ['./team-input.component.css']
})
// @RouteConfig([
//   { path: '/card-input', component: CardInputComponent, as: 'Card-Input' }
// ])
export class TeamInputComponent implements OnInit {
  private _teamOneName = '';
  private _teamOneNames = '';
  private _teamOnePlayers: Array<string>;
  private _teamOne: Team;
  private _teamTwoName = '';
  private _teamTwoNames = '';
  private _teamTwoPlayers: Array<string>;
  private _teamTwo: Team;
  private _letter = '';
  private _game: Game;

  constructor(private router: Router,
              private gameService: GameService,
              private teamService: TeamService) {
    this._teamOnePlayers = new Array<string>();
    this._teamTwoPlayers = new Array<string>();
    this._teamOne = new Team();
    this._teamTwo = new Team();
    this._game = new Game();
  }

  ngOnInit() {
  }

  createGame() {
    this.createPlayers(this._teamOneNames, this._teamTwoNames);
    this.createTeams(this._teamOneName, this._teamOnePlayers, this._teamTwoName, this._teamTwoPlayers);
    this._game.teamOne = this._teamOne;
    this._game.teamTwo = this._teamTwo;
    this._game.letter = this._letter;
    this.gameService.createGame(this._game);
    this.nextView();
  }

  createPlayers(teamOneNames: string, teamTwoNames: string) {
    const splitOne = teamOneNames.split('\n');
    for (const s1 of splitOne) {
      this._teamOnePlayers.push(s1);
    }
    const splitTwo = teamTwoNames.split('\n');
    for (const s2 of splitTwo) {
      this._teamTwoPlayers.push(s2);
    }
  }

  createTeams(teamOneName: string, teamOnePlayers: Array<string>, teamTwoName: string, teamTwoPlayers: Array<string>) {
    this._teamOne.teamName = teamOneName;
    this._teamOne.players = teamOnePlayers;
    this.teamService.createTeam(this._teamOne);
    this._teamTwo.teamName = teamTwoName;
    this._teamTwo.players = teamTwoPlayers;
    this.teamService.createTeam(this._teamTwo);

  }

  nextView() {
    this.router.navigate(['/card-input']);
  }

  get teamOneName(): string {
    return this._teamOneName;
  }

  set teamOneName(value: string) {
    this._teamOneName = value;
  }

  get teamTwoName(): string {
    return this._teamTwoName;
  }

  set teamTwoName(value: string) {
    this._teamTwoName = value;
  }

  get letter(): string {
    return this._letter;
  }

  set letter(value: string) {
    this._letter = value;
  }

  get game(): Game {
    return this._game;
  }

  set game(value: Game) {
    this._game = value;
  }


  get teamOneNames(): string {
    return this._teamOneNames;
  }

  set teamOneNames(value: string) {
    this._teamOneNames = value;
  }

  get teamOnePlayers(): Array<string> {
    return this._teamOnePlayers;
  }

  set teamOnePlayers(value: Array<string>) {
    this._teamOnePlayers = value;
  }

  get teamOne(): Team {
    return this._teamOne;
  }

  set teamOne(value: Team) {
    this._teamOne = value;
  }

  get teamTwoNames(): string {
    return this._teamTwoNames;
  }

  set teamTwoNames(value: string) {
    this._teamTwoNames = value;
  }

  get teamTwoPlayers(): Array<string> {
    return this._teamTwoPlayers;
  }

  set teamTwoPlayers(value: Array<string>) {
    this._teamTwoPlayers = value;
  }

  get teamTwo(): Team {
    return this._teamTwo;
  }

  set teamTwo(value: Team) {
    this._teamTwo = value;
  }
}
