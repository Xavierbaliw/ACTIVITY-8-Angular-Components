import { Component } from '@angular/core';

@Component({
  selector: 'app-divisionchecker',
  templateUrl: './divisionchecker.component.html',
  styleUrl: './divisionchecker.component.css'
})
export class DivisioncheckerComponent {
  num1: number = 0;
  num2: number = 0;
  result: string = '';

  checkDivision(): void {
    if (this.num2 === 0) {
      this.result = 'Error: Division by zero is not allowed!';
    } else if (this.num1 % this.num2 === 0) {
      this.result = `Yes, ${this.num1} is divisible by ${this.num2}!`;
    } else {
      this.result = `No, ${this.num1} is not divisible by ${this.num2}.`;
    }
  }

}
