import { Component, OnInit } from '@angular/core';
import {Receta} from './Receta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.scss']
})
export class ListaRecetasComponent implements OnInit {
  listaRecetas: Receta[] = [
    {
      nombre: "Tortilla",
      ingredientes: ['Papa', 'Huevo', 'Cebolla'],
      dificultad: "Baja",
      imagen: "assets/img/tortilla.jpg"
    },
    {
      nombre: "Tortilla",
      ingredientes: ['Papa', 'Huevo', 'Cebolla'],
      dificultad: "Media",
      imagen: "assets/img/tortilla.jpg"
    },
    {
      nombre: "Tortilla",
      ingredientes: ['Papa', 'Huevo', 'Cebolla'],
      dificultad: "Alta",
      imagen: "assets/img/tortilla.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
