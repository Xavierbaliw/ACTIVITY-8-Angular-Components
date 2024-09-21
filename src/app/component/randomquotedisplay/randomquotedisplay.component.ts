import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {

  private quotes: string[] = [
    "Hindi ka bibigyan ng pagsubok ni Lord kung alam niyang hindi mo kaya.",
    "Wag magmadali, para hindi magkamali. Sabi nga nila, the best things in life comes to those who wait patiently.",
    "Hindi sa taas ng edukasyon nasusukat ang pagkatao. Mababa man ang pinag-aralan mo kung marunong kang RUMESPETO, daig mo pa ang EDUKADO.",
    "Ang negatibong tao ay nakakakita ng problema sa bawat pagkakataon. Ang positibong tao ay nakikita ang pagkakataon sa bawat problema.",
    "Hndi dapat laging nagmamadali dahil lahat ay may tamang panahon. Ang mga bagay na madaling makuha ay ang mga bagay na madali ding mawala.",
    "Ang mga taong agad sumusuko ay hindi nananalo. Ang mga taong laging panalo ay hindi kailan man sumusuko.",
    "Wag mong sanayin ang sarili mo sa pagsisinungaling, kasi baka dumating yung araw na ikaw mismo sa sarili mo di ka na naniniwala."

  ];

  randomQuote: string | null = null;

  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}
