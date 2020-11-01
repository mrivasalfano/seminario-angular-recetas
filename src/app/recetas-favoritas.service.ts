import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Receta } from './lista-recetas/Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasFavoritasService {
  private _listaFavoritas: Receta[];
  listaFavoritas: BehaviorSubject<Receta[]> = new BehaviorSubject([]);

  constructor() { 
    this._listaFavoritas = [];
  }

  add(receta: Receta) {
    const item: Receta = this._listaFavoritas.find((r) => r.nombre == receta.nombre)

    if(!item)
      this._listaFavoritas.push({... receta});
    else
      this._listaFavoritas = this._listaFavoritas.filter((r) => r.nombre != receta.nombre);

      this.listaFavoritas.next(this._listaFavoritas);
  }

  existeReceta(receta: Receta) {
    return this._listaFavoritas.find((r) => r.nombre == receta.nombre);
  }
}
