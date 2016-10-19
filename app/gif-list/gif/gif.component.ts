import { Component, Input } from '@angular/core';

@Component({
  selector: 'gif-component',
  template: `
  	<div class="image-box">
		<img src="{{gifURL.images.fixed_height.url}}"/>
	</div>
	<div class="voting-box">
		<span 	(click)="like()"
				[ngClass]="{'upvote': counter === 1}"
				class="glyphicon glyphicon-thumbs-up"
				aria-hidden="true">
		</span>
		<span 	(click)="dislike()"
				[ngClass]="{'downvote': counter === -1}"
				class="glyphicon glyphicon-thumbs-down"
				aria-hidden="true">
		</span>  
	</div>
  `
})
export class GifComponent {
	@Input('inputGif') gifURL: any;
	counter : number = 0;
    
    like(){
		if (this.counter === 1) {
			this.counter = 0; 
		} else {
			this.counter = 1;
		}
    }
    
    dislike(){
		if (this.counter === -1) {
			this.counter = 0; 
		} else {
			this.counter =-1
		}
    }
}
