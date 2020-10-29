import { Component, OnInit } from '@angular/core';
import { RecetasFavoritasService } from '../recetas-favoritas.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  constructor(public recetasFavoritas: RecetasFavoritasService) { }

  ngOnInit(): void {
  }

}
