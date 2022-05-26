import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion/iniciar-sesion.component';
import { ShellComponent } from './components/shell/shell.component';


const routes: Routes = [
  { path: 'home', component: ShellComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
