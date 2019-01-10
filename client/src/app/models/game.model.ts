import {Team} from './team.model';
import {Words} from './words.model';


export class Game {
  private _id: number;
  private _words: Words;
  private _teamOne: Team;
  private _teamTwo: Team;
  private _letter: string;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get teamOne(): Team {
    return this._teamOne;
  }

  set teamOne(value: Team) {
    this._teamOne = value;
  }

  get teamTwo(): Team {
    return this._teamTwo;
  }

  set teamTwo(value: Team) {
    this._teamTwo = value;
  }

  get letter(): string {
    return this._letter;
  }

  set letter(value: string) {
    this._letter = value;
  }

  get words(): Words {
    return this._words;
  }

  set words(value: Words) {
    this._words = value;
  }

  jsonWithId(): string {
    return '{ "id": ' + this._id +
      ', "letter": "' + this._letter +
      '", "teamOne": ' + this._teamOne.toJSON() +
      ', "teamTwo": ' + this._teamTwo.toJSON() +
      ', "words": ' + this._words.toJSON() + '}';
  }

  toJSON(): string {
    const result = '{ "letter": "' + this._letter +
      '", "teamOne": ' + this._teamOne.toJSON() +
      ', "teamTwo": ' + this._teamTwo.toJSON() + '}';
    return result;

  }

}

