import { Component } from '@angular/core';

@Component({
  selector: 'app-checkmbps',
  templateUrl: './checkmbps.component.html',
  styleUrl: './checkmbps.component.css'
})
export class CheckmbpsComponent {
  mbps: number = 0;
  result: string = '';

  checkMbps(): void {
    if (this.mbps >= 100) {
      this.result = `Your internet speed is fast! (${this.mbps} Mbps)`;
    } else {
      this.result = `Your internet speed is slow! (${this.mbps} Mbps)`;
    }
  }
}
