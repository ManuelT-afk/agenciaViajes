import { Component } from '@angular/core';


export interface Destino{
  nombre : string;
  estado : string;
  categoria : string;
  precio : number;
  duracion : number;
  img : string;
  disponibilidad : boolean;

}

@Component({
  selector: 'app-destinos',
  standalone: false,
  styleUrl: './destinos.css',
  templateUrl: './destinos.html',
})
export class Destinos {

  destinos : Destino[] = [
    {
    nombre : "Catedral de Guadalajara",
    estado : "Guadalajara",
    categoria : "Cultural",
    precio : 1500,
    duracion : 15,
    img : "/img/Cancun.png",
    disponibilidad : false
    },
    {
      nombre : "Callejon del beso",
    estado : "Guanajuato",
    categoria : "Cultural",
    precio : 1500,
    duracion : 15,
    img : "/img/manzanillo.png",
    disponibilidad : false
    },
    {
    nombre : "Puerto Vallarta",
    estado : "Guadalajara",
    categoria : "Playa",
    precio : 1500,
    duracion : 15,
    img : "/img/Cancun.png",
    disponibilidad : true
    },
    {
    nombre: "Chichén Itzá",
    estado: "Yucatán",
    categoria: "Cultural",
    precio: 2800,
    duracion: 4,
    img: "/img/Esmeralda.png",
    disponibilidad: true
  },
  {
    nombre: "Hierve el Agua",
    estado: "Oaxaca",
    categoria: "Naturaleza",
    precio: 2100,
    duracion: 3,
    img: "/img/Vallarta.png",
    disponibilidad: true
  },
  {
    nombre: "Teotihuacán",
    estado: "Estado de México",
    categoria: "Histórica",
    precio: 1600,
    duracion: 2,
    img: "/img/Cabos.png",
    disponibilidad: true
  },
  {
    nombre: "San Cristóbal de las Casas",
    estado: "Chiapas",
    categoria: "Cultural",
    precio: 2600,
    duracion: 4,
    img: "/img/Cancun.png",
    disponibilidad: false
  },
  {
    nombre: "Xalapa",
    estado: "Veracruz",
    categoria: "Montaña",
    precio: 2300,
    duracion: 3,
    img: "/img/Cabos.png",
    disponibilidad: true
  },
  ];
}
