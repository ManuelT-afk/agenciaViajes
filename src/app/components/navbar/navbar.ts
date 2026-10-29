import { AfterViewInit, Component } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements AfterViewInit {
  ngAfterViewInit(): void {
    const sidenav = document.querySelector('#slide-out');
    const trigger = document.querySelector('.sidenav-trigger');

    if (!sidenav || !trigger || typeof M === 'undefined') {
      return;
    }

    M.AutoInit();

    const instance = M.Sidenav.getInstance(sidenav) || M.Sidenav.init(sidenav, {
      edge: 'left',
    });

    trigger.addEventListener('click', (event: Event) => {
      event.preventDefault();
      instance.open();
    });
  }

  navbar = 'Inicio';
  header = 'Viaje';
  promociones = 'Promociones';
  destinos = 'Destinos';
  footer = 'Redes Sociales';
}