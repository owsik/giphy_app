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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var GifListComponent = (function () {
    function GifListComponent(http) {
        this.http = http;
        this.pageTitle = "Gif viewer";
        this.searchValue = "";
        this.gifs = [
            'gif', 'gif', 'gif', 'gif', 'gif'
        ];
    }
    GifListComponent.prototype.search = function (value) {
        this.searchValue = value.target.value;
        console.log(this.searchValue);
        this.getGifs();
    };
    GifListComponent.prototype.getGifs = function () {
        console.log(this.http);
    };
    GifListComponent = __decorate([
        core_1.Component({
            selector: 'gif-app',
            template: "\n\t<section>\n\t\t<h1>{{pageTitle}}</h1>\n\t\t<div class=\"searchWindow\">\n\t\t\t<input type=\"text\" (keyup)=\"search($event)\"/>\n\t\t</div>\n\t\t<div class=\"results\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let gif of gifs\">\n\t\t\t\t\t\t<h2>{{gif}}</h2>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GifListComponent);
    return GifListComponent;
}());
exports.GifListComponent = GifListComponent;
//# sourceMappingURL=gif-list.component.js.map