import { Component } from '@angular/core';

@Component({
  selector: 'app-dailyjournal',
  templateUrl: './dailyjournal.component.html',
  styleUrl: './dailyjournal.component.css'
})
export class DailyjournalComponent {
  date: string = '';
  entry: string = '';
  journalEntries: { date: string, text: string }[] = [];

  saveEntry() {
    const newEntry = { date: this.date, text: this.entry };
    this.journalEntries.push(newEntry);
    this.date = 'Already save';
    this.entry = '';
  }
}
