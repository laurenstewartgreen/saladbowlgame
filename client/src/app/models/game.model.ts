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


}
