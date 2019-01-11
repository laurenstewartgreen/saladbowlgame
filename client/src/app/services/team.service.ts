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
    this.http.get(this.TEAM_API + '/' + id).toPromise()
      .then(response => {
        console.log(response);
        return <Team> response;
      });
  }

  getAllTeams() {
    this.http.get(this.TEAM_API).toPromise()
      .then(response => {
        console.log(response);
        return <Team> response;
      });
  }

  createTeam(team: Team) {
    this.http.post(this.TEAM_API, JSON.parse(team.toJSON())).toPromise()
      .then(response => {
        team = <Team> response;
        console.log('Team created: ')
        console.log(team);
      });
  }
}

