import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  temperature: number | null = null;
  convertedTemperature: number | null = null;
  conversionType: string = 'CtoF';


  convertTemperature(): void {
    if (this.temperature !== null) {
      if (this.conversionType === 'CtoF') {

        this.convertedTemperature = (this.temperature * 9 / 5) + 32;
      } else if (this.conversionType === 'FtoC') {

        this.convertedTemperature = (this.temperature - 32) * 5 / 9;
      }
    } else {
      this.convertedTemperature = null;
    }
  }

}
