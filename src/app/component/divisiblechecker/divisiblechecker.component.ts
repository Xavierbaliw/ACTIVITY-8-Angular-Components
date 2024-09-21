import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {

  firstNumber: number | null = null;
  secondNumber: number | null = null;
  result: string | null = null;

  checkDivisibility(): void {
    if (this.firstNumber !== null && this.secondNumber !== null && this.secondNumber !== 0) {
      if (this.firstNumber % this.secondNumber === 0) {
        this.result = `${this.firstNumber} is divisible by ${this.secondNumber}`;
      } else {
        this.result = `${this.firstNumber} is not divisible by ${this.secondNumber}`;
      }
    } else if (this.secondNumber === 0) {
      this.result = 'Division by zero is not allowed';
    } else {
      this.result = 'Please enter valid numbers';
    }
  }
}
