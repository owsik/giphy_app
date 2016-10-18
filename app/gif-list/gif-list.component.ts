import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'gif-app',
  template: `
	<section>
		<h1>{{pageTitle}}</h1>
		<div class="searchWindow">
			<input type="text" (keyup)="search($event)"/>
		</div>
		<div class="results">
			<ul>
				<li *ngFor="let gif of gifs">
						<h2>{{gif}}</h2>
				</li>
			</ul>
		</div>
	</section>
  `
})
export class GifListComponent {
	public pageTitle: string = "Gif viewer";
	private searchValue: string = "";
	gifs: any[];

	constructor(private http: Http) { 

	}

	search(value: any) {
		this.searchValue = value.target.value;
		this.getGifs(10);
	}

	getGifs(limit: number) {
		const endpoint = 'http://api.giphy.com/v1/gifs/search?q=' + this.searchValue + '&limit=' + limit + '&api_key=dc6zaTOxFJmzC';

		this.http.get(endpoint).subscribe((response: Response) => {
			const resp = response.json();

			console.log('odpowiedź: ', response, response.json(), response.json().data);

			this.gifs = resp.data;

			console.log(this.gifs);
		})
	}
}
