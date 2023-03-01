import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  template: `
    <ul  style="list-style:none">
      <li *ngFor="let frase of frases">{{ frase }}</li>
    </ul>
  `
})
export class EscenaComponent {
  @Input() frases: string[] | undefined;
}

