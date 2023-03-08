import { Component, Input } from '@angular/core';
import { Historia } from '../../app/interface/interface';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() historia: Historia[] = [];


  currentSentence = 0;
  prev() {
    if (this.currentSentence == 0) {
      this.currentSentence = this.historia.length - 1;

    } else {
      this.currentSentence--;
    }

  }

  next() {
    if (this.currentSentence == this.historia.length - 1) {
      this.currentSentence == 0;
    } else {
      this.currentSentence++;
    }
  }


}

