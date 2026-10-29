import { Component } from '@angular/core';

export interface Promocion {
  idDestino: number;
  titulo: string;
  descripcion: string;
  descuento?: number;
  beneficio?: string;
  vigente: boolean;
  imagen: string;
}

@Component({
  selector: 'app-promociones',
  standalone: false,
  styleUrl: './promociones.css',
  templateUrl: './promociones.html',
})
export class Promociones {
  mostrarVigentes = true;

  promociones: Promocion[] = [
    {
      idDestino: 1,
      titulo: 'Paquete Riviera Maya',
      descripcion: 'Descuento especial para viajeros que quieran explorar Cancún y Valladolid.',
      descuento: 20,
      vigente: true,
      imagen: '/img/Cancun.png',
    },
    {
      idDestino: 2,
      titulo: 'Escapada a Puerto Vallarta',
      descripcion: 'Aprovecha un beneficio exclusivo en habitaciones con vista al mar.',
      beneficio: 'Habitación con vista al mar incluida',
      vigente: true,
      imagen: '/img/Vallarta.png',
    },
    {
      idDestino: 3,
      titulo: 'Oferta Chichén Itzá',
      descripcion: 'Tour guiado con desayuno incluido para todo el grupo.',
      descuento: 15,
      vigente: true,
      imagen: '/img/Esmeralda.png',
    },
    {
      idDestino: 4,
      titulo: 'Ruta de Oaxaca',
      descripcion: 'Promoción de fin de semana en recorrido cultural y gastronómico.',
      beneficio: 'Traslado local gratis',
      vigente: false,
      imagen: '/img/manzanillo.png',
    },
    {
      idDestino: 5,
      titulo: 'Vacaciones en Los Cabos',
      descripcion: 'Especial para luna de miel y escapadas románticas.',
      descuento: 25,
      vigente: true,
      imagen: '/img/Cabos.png',
    },
  ];

  get promocionesFiltradas(): Promocion[] {
    return this.mostrarVigentes
      ? this.promociones.filter((promo) => promo.vigente)
      : this.promociones;
  }

  alternarPromociones(): void {
    this.mostrarVigentes = !this.mostrarVigentes;
  }
}