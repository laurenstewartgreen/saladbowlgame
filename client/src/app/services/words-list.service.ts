import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Words} from '../models/words.model';

@Injectable({
  providedIn: 'root'
})
export class WordsListService {
  public API = '//localhost:8080';
  public WORDS_API = this.API + '/words';

  constructor(private http: HttpClient) { }

  getWordsListById(id: number): Words {
    let words = new Words();
    this.http.get(this.WORDS_API + '/' + id).toPromise()
      .then(response => {
        console.log(response);
        words = <Words> response;
      });
    return words;
  }

  getAllWordsLists(): Promise<any> {
    return this.http.get(this.WORDS_API).toPromise();
  }

  createWordsList(words: Words): Promise<any> {
    return this.http.post(this.WORDS_API, JSON.parse(words.toJSON())).toPromise();
  }
}
