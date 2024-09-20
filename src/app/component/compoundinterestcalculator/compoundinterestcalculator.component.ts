import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number = 1;
  compoundInterest: number | null = null;
  totalAmount: number | null = null;

  calculateCompoundInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null) {

      const decimalRate = this.rate / 100;


      this.totalAmount = this.principal * Math.pow((1 + decimalRate / this.frequency), this.frequency * this.time);


      this.compoundInterest = this.totalAmount - this.principal;
    } else {
      this.compoundInterest = null;
      this.totalAmount = null;
    }
  }
}
