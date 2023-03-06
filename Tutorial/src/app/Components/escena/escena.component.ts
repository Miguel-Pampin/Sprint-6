import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-escena',
  template: `
    <ul  >
      <li  *ngFor="let frase of frases" [ngClass]={li:frase}>
 {{ frase }}</li>
    </ul>
  `,
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() frases: string[] | undefined;
}

