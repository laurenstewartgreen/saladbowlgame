import {Team} from './team.model';


export class Game {
  id: number;
  // words: Words;
  teamOne: Team;
  teamTwo: Team;
  letter: String;

  constructor(teamOne: Team, teamTwo: Team, letter: String) {
    this.teamOne = teamOne;
    this.teamTwo = teamTwo;
    this.letter = letter;
  }

  toJSON(): string {
    return '{ "letter": "' + this.letter +
      '", "teamOne": ' + this.teamOne.toJSON() +
      ', "teamTwo": ' + this.teamTwo.toJSON() + '}';

  }

}
