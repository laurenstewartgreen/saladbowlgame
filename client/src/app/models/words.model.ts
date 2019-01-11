

export class Words {
  private _id: number;
  private _wordsList: Array<string>;
  private _words: Array<string>;

  constructor() {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get words(): Array<string> {
    return this._words;
  }

  set words(value: Array<string>) {
    this._words = value;
  }

  get wordsList(): Array<string> {
    return this._wordsList;
  }

  set wordsList(value: Array<string>) {
    this._wordsList = value;
  }

  removeWord(word: string) {
    this._wordsList.splice(this._wordsList.indexOf(word), 1);
  }

  getWord(index: number): string {
    return this._wordsList[index];
  }

  size(): number {
    return this._wordsList.length;
  }

  toJSON(): string {
    let result = '{ "words": [';
    for (const word of this._wordsList) {
      result += '"' + word + '", ';
    }
    return result.slice(0, result.length - 2) + '] }';
  }
}
