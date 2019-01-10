export class Team {
    private _id: number;
    private _teamName: string;
    private _teamScore: number;
    private _players: Array<string>;

  constructor();
  constructor(teamName?: string, players?: Array<string>) {
    this._teamName = teamName;
    this._players = players;
    this._teamScore = 0;
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

  get players(): Array<string> {
    return this._players;
  }

  set players(value: Array<string>) {
    this._players = value;
  }

  toJSON(): string {
    return '{ "teamName": "' + this._teamName + '", "teamScore": ' + this._teamScore +
      ', "players": [' + this.playersToJSON() + '] }';
  }

  playersToJSON(): string {
    let result = '';
    for (const player of this._players) {
      result += '"' + player + '", ';
    }
    return result.slice(0, result.length - 2);
  }
}

