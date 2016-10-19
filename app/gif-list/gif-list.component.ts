import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'gif-app',
  template: `
	<section class="container">
		<h1 class="text-center">{{pageTitle}}</h1>
		<div class="searchWindow">
			<input type="text" class="form-control" (keyup)="search($event)"/>
		</div>
		<div class="results">
			<ul class="list-group">
				<li class="list-group-item gif-box" *ngFor="let gif of gifs">
					<gif-component [inputGif]="gif"></gif-component>
				</li>
			</ul>
			<div class="no-results" *ngIf="gifLength < 1">
				<h2 class="text-center">No Results found</h2>
			</div>
		</div>
	</section>
  `
})
export class GifListComponent {
	public pageTitle: string = "Gif Viewer";
	private searchValue: string = "";
	gifLength: number;
	gifs: any[];

	constructor(private http: Http) { 

	}

	search(value: any) {
		this.searchValue = value.target.value;

		if (this.searchValue.length > 2) {
			this.getGifs(10);
		}
	}

	getGifs(limit: number) {
		const endpoint = 'http://api.giphy.com/v1/gifs/search?q=' + this.searchValue + '&limit=' + limit + '&api_key=dc6zaTOxFJmzC';

		this.http.get(endpoint).subscribe((response: Response) => {

			if (response.status >= 200 && response.status < 300) {
				const resp = response.json();
				//console.log('odpowiedź: ', response, response.json(), response.json().data);
				this.gifs = resp.data;
				this.gifLength = this.gifs.length;
				//console.log('here is this.gifs:', this.gifs);
			} else {
				alert('Server error');
			}
		})
	}
}
