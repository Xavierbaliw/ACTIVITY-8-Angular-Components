import { Component } from '@angular/core';

@Component({
  selector: 'app-creatingbracket',
  templateUrl: './creatingbracket.component.html',
  styleUrl: './creatingbracket.component.css'
})
export class CreatingbracketComponent {
  teamCount: number = 5;
  bracket: any = null;

  createBracket(): void {
    const teams: string[] = [];
    for (let i = 1; i <= this.teamCount; i++) {
      teams.push(this.generateRandomTeamName());
    }

    const groups: any[] = [];
    const groupSize = Math.ceil(this.teamCount / 5);
    for (let i = 0; i < 5; i++) {
      const group: any = {
        name: `Group ${i + 1}`,
        teams: teams.slice(i * groupSize, (i + 1) * groupSize)
      };
      groups.push(group);
    }

    this.bracket = groups;
  }

  generateRandomTeamName(): string {
    const adjectives = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Black', 'White'];
    const nouns = ['Lions', 'Tigers', 'Bears', 'Wolves', 'Dragons', 'Unicorns', 'Pandas', 'Kittens'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective} ${noun}`;
  }

}
