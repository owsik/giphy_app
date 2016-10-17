import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 (click)="addLike()">My First {{likes}} App</h1>'
})
export class AppComponent {
	likes: number = 0;

	addLike() {
		this.likes += 1;
	}
}
