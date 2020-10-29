import { Injectable } from '@angular/core';
import { Receta } from './lista-recetas/Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasFavoritasService {
  listaFavoritas: Receta[];

  constructor() { 
    this.listaFavoritas = [];
  }

  add(receta: Receta) {
    const item: Receta = this.listaFavoritas.find((r) => r.nombre == receta.nombre)

    if(!item)
      this.listaFavoritas.push({... receta});
    else
      this.listaFavoritas = this.listaFavoritas.filter((r) => r.nombre != receta.nombre);
  }
}
