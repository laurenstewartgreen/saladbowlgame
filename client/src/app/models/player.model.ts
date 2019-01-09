import { Team } from './team.model';

export class Player {
    private _id: number;
    private _name: string;
    private _score = 0;
    private _team: number;


  constructor(name: string, team: number) {
    this._name = name;
    this._team = team;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get team(): number {
    return this._team;
  }

  set team(value: number) {
    this._team = value;
  }

  toJSON(): string {
    return '{ "name": "' + this._name + '", "score": ' + this._score + ', "team": ' + this._team + '}';

  }
}
