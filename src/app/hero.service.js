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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.onTeamChange = new Rx_1.Subject();
    }
    HeroService.prototype.getTeamInfo = function () {
        var _this = this;
        return this.http.get("https://nodejs-server-footapi.herokuapp.com/football/teams")
            .map(function (res) { return res.json(); }).subscribe(function (e) { return _this.onTeamChange.next(e); });
    };
    HeroService.prototype.deleteTeamInfo = function (team) {
        var _this = this;
        this.http.delete("https://nodejs-server-footapi.herokuapp.com/football/teams/" + team)
            .subscribe(function () { return _this.getTeamInfo(); });
    };
    HeroService.prototype.addTeamInfo = function (team) {
        var _this = this;
        this.http.post("https://nodejs-server-footapi.herokuapp.com/football/teams/", team)
            .subscribe(function () { return _this.getTeamInfo(); });
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map