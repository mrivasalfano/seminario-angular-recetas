import { Component, OnInit } from '@angular/core';
import {Receta} from './Receta';
import {RecetasFavoritasService} from '../recetas-favoritas.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.scss']
})
export class ListaRecetasComponent implements OnInit {
  
  listaRecetas: Receta[] = [
    {
      nombre: "Tortilla",
      dificultad: "media",
      imagen: "assets/img/tortilla.jpg",
      tiempo: "30 minutos" ,
      rate: 0
    },
    {
      nombre: "Ñoquis",
      dificultad: "baja",
      imagen: "assets/img/ñoquis.jpeg",
      tiempo: "20 minutos",
      rate: 4
    },
    {
      nombre: "Matambre a la pizza",
      dificultad: "alta",
      imagen: "assets/img/matambre_pizza.jpg",
      tiempo: "1 hora",
      rate: 2
    }
  ];

  constructor(private recetasFavoritas: RecetasFavoritasService) {
  }

  ngOnInit(): void {
  }

  agregarFavoritos(receta: Receta) {
    this.recetasFavoritas.add(receta);
  }

  favoritoClass(receta: Receta) {
    const yaExisteReceta = this.recetasFavoritas.existeReceta(receta);

    if (yaExisteReceta)
      return 'text-pink-600';
  }

}
