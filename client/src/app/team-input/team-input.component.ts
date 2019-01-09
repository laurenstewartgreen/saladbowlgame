import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../models/player.model';
import { Team } from '../models/team.model';
import {Game} from '../models/game.model';

@Component({
  selector: 'app-team-input',
  templateUrl: './team-input.component.html',
  styleUrls: ['./team-input.component.css']
})
export class TeamInputComponent implements OnInit {
  private _teamOneName = '';
  private _teamOneNames = '';
  private _teamOnePlayers = new Set<Player>();
  private _teamOne: Team;
  private _teamTwoName = '';
  private _teamTwoNames = '';
  private _teamTwoPlayers = new Set<Player>();
  private _teamTwo: Team;
  private _letter = '';
  private _game: Game;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createGame() {
    console.log(this._teamOneName + ' ' + this._teamOneNames + ' ' +  this._teamTwoName + ' ' + this._teamTwoNames + ' ' + this._letter);
    this.createPlayers(this._teamOneNames, this._teamTwoNames);
    this.createTeams(this._teamOneName, this._teamOnePlayers, this._teamTwoName, this._teamTwoPlayers);
    this._game = new Game(this._teamOne, this._teamTwo, this._letter);
    console.log(this._game.teamOne.teamName + ' vs. ' + this._game.teamTwo.teamName);
    this.router.navigate(['/card-input']);
  }

  createPlayers(teamOneNames: string, teamTwoNames: string) {
    const splitOne = teamOneNames.split('\n');
    for (const s1 of splitOne) {
      this._teamOnePlayers.add(new Player(s1, 1));
      console.log(s1 + ' is now on Team 1');
      console.log(this._teamOnePlayers);
    }
    const splitTwo = teamTwoNames.split('\n');
    for (const s2 of splitTwo) {
      this._teamTwoPlayers.add(new Player(s2, 2));
      console.log(s2 + ' is now on Team 2');
      console.log(this._teamTwoPlayers);
    }
  }

  createTeams(teamOneName: string, teamOnePlayers: Set<Player>, teamTwoName: string, teamTwoPlayers: Set<Player>) {
    this._teamOne = new Team(teamOneName, teamOnePlayers);
    this._teamTwo = new Team(teamTwoName, teamTwoPlayers);
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

  get teamOnePlayers(): Set<Player> {
    return this._teamOnePlayers;
  }

  set teamOnePlayers(value: Set<Player>) {
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

  get teamTwoPlayers(): Set<Player> {
    return this._teamTwoPlayers;
  }

  set teamTwoPlayers(value: Set<Player>) {
    this._teamTwoPlayers = value;
  }

  get teamTwo(): Team {
    return this._teamTwo;
  }

  set teamTwo(value: Team) {
    this._teamTwo = value;
  }
}
