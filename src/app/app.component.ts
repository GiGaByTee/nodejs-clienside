
import { HeroService } from './hero.service';
import { Component, Inject, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';


import { Team } from './team';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  template: `
  <p>
  <input #deleteInput />
  <button id="deleteButton" (click)="delete()">delete</button>
  </p>
  <table id="t01" >
  <tr>
    <th>name</th>
    <th>code</th>
    <th>shortName</th>
    <th>squadMarketValue</th>
    <th>crestUrl</th>
    <th>actions</th>
  </tr>
  <tr *ngFor="let team of teams.teams" class="row-table">
    <td>{{team.name}}</td>
    <td>{{team.code}}</td>
    <td>{{team.shortName}}</td>
    <td>{{team.squadMarketValue}}</td>
    <td><img src="{{team.crestUrl}}" alt="" width="30" height="30"></td>
    <td><button id="deleteButton" (click)="deleteRow(team)">delete</button></td>
  </tr>
  <tr>
    <td><input #teamName id='teamName'/></td>
    <td><input #teamCode id='teamCode'/></td>
    <td><input [ngClass]="state === 'empty' ? 'x_color' : 'o_color'" #teamShortName id='teamShortName'/></td>
    <td><input #price id='price'/></td>
    <td><input #image id='image'/></td>
    <td><button id="addButton" (click)="addTeam()">addTeam</button></td>
  </tr>
  </table>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private heroService: HeroService) { }
  title = 'Tour of Football';
  state = "";

  teams: Team[] = [];
  @ViewChild('deleteInput') input: ElementRef;
  @ViewChild('teamName') teamName: ElementRef;
  @ViewChild('teamCode') teamCode: ElementRef;
  @ViewChild('teamShortName') teamShortName: ElementRef;
  @ViewChild('price') price: ElementRef;
  @ViewChild('image') image: ElementRef;

  ngOnInit(): void {
    this.heroService.onTeamChange
      .subscribe(t => this.teams = t);

    this.heroService.getTeamInfo();
  }


  delete() {
    this.heroService.deleteTeamInfo(this.input.nativeElement.value);
  }

  deleteRow(team: Team) {
    this.heroService.deleteTeamInfo(team.shortName);
  }

  addTeam() {
    if (this.teamShortName.nativeElement.value == "") {
      this.state = "empty";
      return;
    } else {
      this.state = "";
    }

    var team = new Team(
      this.teamCode.nativeElement.value,
      this.teamName.nativeElement.value,
      this.teamShortName.nativeElement.value,
      this.price.nativeElement.value,
      this.image.nativeElement.value);

    this.heroService.addTeamInfo(team);

    this.clearInputFields();
  }

  clearInputFields() {
    this.teamName.nativeElement.value = "";
    this.teamCode.nativeElement.value = "";
    this.teamShortName.nativeElement.value = "";
    this.price.nativeElement.value = "";
    this.image.nativeElement.value = "";
  }

}
