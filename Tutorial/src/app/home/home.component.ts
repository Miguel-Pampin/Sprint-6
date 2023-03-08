import { Component } from '@angular/core';
import { historia } from '../../../src/app/interface/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 mostrar:boolean = false

    comenzar():void{
        this.mostrar = !this.mostrar;

    }
  historia:historia[] = [
    {
        texto:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        img:".../../../assets/1.jpg"
    },

    {
        texto:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
        img: '.../../../assets/2.jpg'
    },

    {
        texto:"L'heroi va decidir travessar la porta que el portava a casa",
        img:".../../../assets/3.jpg"
    },

    {
        texto:"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
        img:".../../../assets/4.jpg"
    }
]}


