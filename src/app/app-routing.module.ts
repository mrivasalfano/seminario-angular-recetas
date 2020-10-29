import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';

const routes: Routes = [
  { path: '', redirectTo: 'recetas', pathMatch: 'full'},
  { path: 'recetas', component: ListaRecetasComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: '**', redirectTo: 'recetas'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
