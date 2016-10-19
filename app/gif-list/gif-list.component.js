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
        this.pageTitle = "Gif Viewer";
        this.searchValue = "";
    }
    GifListComponent.prototype.search = function (value) {
        this.searchValue = value.target.value;
        if (this.searchValue.length > 2) {
            this.getGifs(10);
        }
    };
    GifListComponent.prototype.getGifs = function (limit) {
        var _this = this;
        var endpoint = 'http://api.giphy.com/v1/gifs/search?q=' + this.searchValue + '&limit=' + limit + '&api_key=dc6zaTOxFJmzC';
        this.http.get(endpoint).subscribe(function (response) {
            if (response.status >= 200 && response.status < 300) {
                var resp = response.json();
                //console.log('odpowiedź: ', response, response.json(), response.json().data);
                _this.gifs = resp.data;
                _this.gifLength = _this.gifs.length;
            }
            else {
                alert('Server error');
            }
        });
    };
    GifListComponent = __decorate([
        core_1.Component({
            selector: 'gif-app',
            template: "\n\t<section class=\"container\">\n\t\t<h1 class=\"text-center\">{{pageTitle}}</h1>\n\t\t<div class=\"searchWindow\">\n\t\t\t<input type=\"text\" class=\"form-control\" (keyup)=\"search($event)\"/>\n\t\t</div>\n\t\t<div class=\"results\">\n\t\t\t<ul class=\"list-group\">\n\t\t\t\t<li class=\"list-group-item gif-box\" *ngFor=\"let gif of gifs\">\n\t\t\t\t\t<gif-component [inputGif]=\"gif\"></gif-component>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"no-results\" *ngIf=\"gifLength < 1\">\n\t\t\t\t<h2 class=\"text-center\">No Results found</h2>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GifListComponent);
    return GifListComponent;
}());
exports.GifListComponent = GifListComponent;
//# sourceMappingURL=gif-list.component.js.map