import { Component, signal, AfterViewInit,OnInit } from '@angular/core';
import $ from 'jquery';
declare const M : any;



@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements AfterViewInit, OnInit {
  ngOnInit(): void {
    console.log('Jquery disponible ', $.fn.jquery);
  }

  protected readonly title = signal ('viajes');
  navbar = "Inicio";
  header = "Viaje";
  promociones = "Promociones";
  destinos = "Destinos";
  footer = "Redes Sociales";



  ngAfterViewInit(): void {
    const init = () => {
      const init = () => {
      const sidenav = document.querySelectorAll('.sidenav');

      if (typeof M !== 'undefined' && sidenav.length > 0) {
        M.AutoInit();
        M.Sidenav.init(sidenav, { edge: 'left' });
        return;
      }

      setTimeout(init, 100);
    };

    init();
    }
    
  }
}
