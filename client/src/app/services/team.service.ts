import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public API = '//localhost:8080';
  public TEAM_API = this.API + '/team';

  constructor(private http: HttpClient) { }

  getTeamById(id: number) {
    return this.http.get(this.TEAM_API + '/' + id).toPromise()
      .then(returnResponse => {
        console.log(returnResponse);
      });
  }

  createTeam(team: Team) {
    this.http.post(this.TEAM_API, JSON.parse(team.toJSON())).toPromise()
      .then(response => {
        console.log(response);
      });
  }
}
