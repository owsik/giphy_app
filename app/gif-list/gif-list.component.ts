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
	gifs: any[] = [
		'gif', 'gif', 'gif', 'gif', 'gif'
	];

	constructor(private http: Http) { 

	}

	search(value: any) {
		this.searchValue = value.target.value;
		console.log(this.searchValue);
		this.getGifs()
	}

	getGifs() {
		console.log(this.http);
	}
}
