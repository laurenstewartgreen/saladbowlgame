

export class Words {
  private _id: number;
  private _wordsList: Array<string>;

  constructor() {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get wordsList(): Array<string> {
    return this._wordsList;
  }

  set wordsList(value: Array<string>) {
    this._wordsList = value;
  }

  toJSON(): string {
    let result = '{ "words": [';
    for (const word of this._wordsList) {
      result += '"' + word + '", ';
    }
    return result.slice(0, result.length - 2) + '] }';
  }
}
