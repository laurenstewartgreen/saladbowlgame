import { Player } from './player.model';

export class Team {
    private _id: number;
    private _teamName: string;
    private _teamScore: number;
    private _players: Set<Player>;


  constructor(teamName: string, players: Set<Player>) {
    this._teamName = teamName;
    this._players = players;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get teamName(): string {
    return this._teamName;
  }

  set teamName(value: string) {
    this._teamName = value;
  }

  get teamScore(): number {
    return this._teamScore;
  }

  set teamScore(value: number) {
    this._teamScore = value;
  }

  get players(): Set<Player> {
    return this._players;
  }

  set players(value: Set<Player>) {
    this._players = value;
  }
}
