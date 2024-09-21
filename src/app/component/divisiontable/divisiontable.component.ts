import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiontable',
  templateUrl: './divisiontable.component.html',
  styleUrl: './divisiontable.component.css'
})
export class DivisiontableComponent {
  num: number = 0;
  table: { num: number, result: string }[] = [];

  generateTable(): void {
    this.table = [];
    for (let i = 1; i <= 10; i++) {
      let result = `${this.num} ÷ ${i} = ${this.num / i}`;
      this.table.push({ num: i, result: result });
    }
  }

}
