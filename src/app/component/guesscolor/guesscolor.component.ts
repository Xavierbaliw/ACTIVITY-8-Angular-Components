import { Component } from '@angular/core';

@Component({
  selector: 'app-guesscolor',
  templateUrl: './guesscolor.component.html',
  styleUrl: './guesscolor.component.css'
})
export class GuesscolorComponent {
  userColor: string = '';
  result: string = '';

  colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'gray',
    'black',
    'white'
  ];

  checkColor(): void {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    if (this.userColor.toLowerCase() === randomColor) {
      this.result = ` Congratulations! You guessed the color: ${randomColor}!`;
    } else {
      this.result = ` Sorry, the correct color was: ${randomColor}. Try again!`;
    }
  }

}
