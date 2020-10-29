import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRecetasComponent,
    FavoritosComponent,
    RatingStarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
