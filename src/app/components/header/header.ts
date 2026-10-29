import { Component, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs'; 
declare const M : any;
@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header implements AfterViewInit {
  menuViaje = [
    {
      titulo : "Cancun",
      descripcion : "El mejor lugar para tener un nuevo dia en tu verano",
      img : "/img/Cancun.png"
    },
    {
     titulo : "Puerto Vallarta",
      descripcion : "El mejor lugar para pasar un rato en familia",
      img : "/img/Vallarta.png" 
    },
    {
      titulo : "Los Cabos",
      descripcion : "El mejor sitio para pasar tu luna de miel",
      img : "/img/Cabos.png"
    },
    {
       titulo : "Puerto Esmeralda",
      descripcion : "El mejor sitio para pasar tus fines de semana",
      img : "/img/Esmeralda.png "
    }

  ]



  ngAfterViewInit(): void {
    setTimeout(() => {
      const slideMenus = document.querySelectorAll('.slider');
      M.Slider.init(slideMenus, {
        indeicators: true,
        duration: 500,
        interval: 5000,
      });
    });
    
  }

  titulo = "Tus proximo destino";
  subtitulo = "De la mejor manera de recibir tu dia"
  slogan = "La mejor agencia de viajes, agenda ahora"


}
