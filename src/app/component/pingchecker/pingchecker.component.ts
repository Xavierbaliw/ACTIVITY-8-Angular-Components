import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pingchecker',
  templateUrl: './pingchecker.component.html',
  styleUrl: './pingchecker.component.css'
})
export class PingcheckerComponent {

  ping: number = 0;
  result: string = '';

  checkPing(): void {
    if (this.ping <= 4) {
      this.result = `Your ping is very low! You're likely to have a great gaming experience. (${this.ping} ms)`;
    } else if (this.ping <= 20) {
      this.result = `Your ping is relatively low. You may experience some minor lag. (${this.ping} ms)`;
    } else if (this.ping <= 50) {
      this.result = `Your ping is moderate. You may experience noticeable lag. (${this.ping} ms)`;
    } else {
      this.result = `Your ping is high! You may experience significant lag. (${this.ping} ms)`;
    }
  }
}
