
import { Team } from './team'

import { Injectable } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class HeroService {

  onTeamChange: Subject<Team[]> = new Subject();

  constructor(private http: Http) {
  }


  getTeamInfo() {
    return this.http.get("https://nodejs-server-footapi.herokuapp.com/football/teams")
      .map(res => res.json() as Team[]).subscribe(e => this.onTeamChange.next(e));
  }

  deleteTeamInfo(team: string) {
    this.http.delete("https://nodejs-server-footapi.herokuapp.com/football/teams/" + team)
      .subscribe( () => this.getTeamInfo());
  }

  addTeamInfo(team: Team) {
    this.http.post("https://nodejs-server-footapi.herokuapp.com/football/teams/", team)
      .subscribe( () => this.getTeamInfo());
  }
}
