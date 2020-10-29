import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../lista-recetas/Receta';
import { RecetasFavoritasService } from '../recetas-favoritas.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  listaFavoritas$: Observable<Receta[]>;

  constructor(private recetasFavoritas: RecetasFavoritasService) {
    this.listaFavoritas$ = recetasFavoritas.listaFavoritas.asObservable();
  }

  ngOnInit(): void {
  }

}
