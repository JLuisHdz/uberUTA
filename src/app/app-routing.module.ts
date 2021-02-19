import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { USUARIOComponent } from './usuario/usuario.component';
import { CONDUCTORComponent } from './conductor/conductor.component';
import { ADMINComponent } from './admin/admin.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';

const routes: Routes = [
  { path: 'usuarios', component: USUARIOComponent },
  { path: 'admin', component: ADMINComponent },
  { path: 'conductor', component: CONDUCTORComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
