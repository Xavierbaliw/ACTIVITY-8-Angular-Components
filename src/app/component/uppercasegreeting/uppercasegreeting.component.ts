import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {

  userName: string = '';
  uppercaseName: string | null = null;

  convertToUppercase(): void {
    if (this.userName) {
      this.uppercaseName = this.userName.toUpperCase();
    } else {
      this.uppercaseName = null;
    }
  }
}
