"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var hero_service_1 = require("./hero.service");
var core_1 = require("@angular/core");
var team_1 = require("./team");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.title = 'Tour of Football';
        this.state = "";
        this.teams = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.onTeamChange
            .subscribe(function (t) { return _this.teams = t; });
        this.heroService.getTeamInfo();
    };
    AppComponent.prototype.delete = function () {
        this.heroService.deleteTeamInfo(this.input.nativeElement.value);
    };
    AppComponent.prototype.deleteRow = function (team) {
        this.heroService.deleteTeamInfo(team.shortName);
    };
    AppComponent.prototype.addTeam = function () {
        if (this.teamShortName.nativeElement.value == "") {
            this.state = "empty";
            return;
        }
        else {
            this.state = "";
        }
        var team = new team_1.Team(this.teamCode.nativeElement.value, this.teamName.nativeElement.value, this.teamShortName.nativeElement.value, this.price.nativeElement.value, this.image.nativeElement.value);
        this.heroService.addTeamInfo(team);
        this.clearInputFields();
    };
    AppComponent.prototype.clearInputFields = function () {
        this.teamName.nativeElement.value = "";
        this.teamCode.nativeElement.value = "";
        this.teamShortName.nativeElement.value = "";
        this.price.nativeElement.value = "";
        this.image.nativeElement.value = "";
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('deleteInput'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "input", void 0);
__decorate([
    core_1.ViewChild('teamName'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "teamName", void 0);
__decorate([
    core_1.ViewChild('teamCode'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "teamCode", void 0);
__decorate([
    core_1.ViewChild('teamShortName'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "teamShortName", void 0);
__decorate([
    core_1.ViewChild('price'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "price", void 0);
__decorate([
    core_1.ViewChild('image'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "image", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <p>\n  <input #deleteInput />\n  <button id=\"deleteButton\" (click)=\"delete()\">delete</button>\n  </p>\n  <table id=\"t01\" >\n  <tr>\n    <th>name</th>\n    <th>code</th>\n    <th>shortName</th>\n    <th>squadMarketValue</th>\n    <th>crestUrl</th>\n    <th>actions</th>\n  </tr>\n  <tr *ngFor=\"let team of teams.teams\" class=\"row-table\">\n    <td>{{team.name}}</td>\n    <td>{{team.code}}</td>\n    <td>{{team.shortName}}</td>\n    <td>{{team.squadMarketValue}}</td>\n    <td><img src=\"{{team.crestUrl}}\" alt=\"\" width=\"30\" height=\"30\"></td>\n    <td><button id=\"deleteButton\" (click)=\"deleteRow(team)\">delete</button></td>\n  </tr>\n  <tr>\n    <td><input #teamName id='teamName'/></td>\n    <td><input #teamCode id='teamCode'/></td>\n    <td><input [ngClass]=\"state === 'empty' ? 'x_color' : 'o_color'\" #teamShortName id='teamShortName'/></td>\n    <td><input #price id='price'/></td>\n    <td><input #image id='image'/></td>\n    <td><button id=\"addButton\" (click)=\"addTeam()\">addTeam</button></td>\n  </tr>\n  </table>\n  ",
        styleUrls: ['./app.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router, hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map