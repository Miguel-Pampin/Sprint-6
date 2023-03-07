import { Component } from '@angular/core';
import { Historia } from '../../interface/interface';

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
  historia:Historia[] = [
    { 
        texto:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"
       
    },

    {
        texto:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."
       
    },
    
    {
        texto:"L'heroi va decidir travessar la porta que el portava a casa"
        
    },
    
    {
        texto:"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
           
    }
]}


