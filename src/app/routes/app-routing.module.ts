import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from '../components/perfiles/perfil/perfil.component';
import { LoginComponent } from '../components/home/login/login.component';
import { AgendarComponent } from '../components/agendar/agendar/agendar.component';
import { CualidadesComponent } from '../components/cualidades/cualidades.component';
import { ValoracionComponent } from '../components/valoracion/valoracion/valoracion.component';
import { Valoracion2Component } from '../components/valoracion/valoracion2/valoracion2.component';
import { Valoracion3Component } from '../components/valoracion/valoracion3/valoracion3.component';
import { BienvenidoComponent } from '../components/welcome/bienvenido/bienvenido.component';
import { CalendarioComponent } from '../components/calendario/calendario/calendario.component';
import { EvaluacionComponent } from '../components/evaluacion/evaluacion/evaluacion.component';
import { Evaluacion2Component } from '../components/evaluacion/evaluacion2/evaluacion2.component';
import { Evaluacion3Component } from '../components/evaluacion/evaluacion3/evaluacion3.component';
import { RegistrarseComponent } from '../components/registrarse/registrarse.component';

const appRoutes: Routes = 
[
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'evaluacion3', component: Evaluacion3Component},
  { path: 'evaluacion2', component: Evaluacion2Component},
  { path: 'evaluacion', component: EvaluacionComponent},
  { path: 'agendar', component: AgendarComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'valoracion', component: ValoracionComponent},
  { path: 'valoracion2', component: Valoracion2Component},
  { path: 'valoracion3', component: Valoracion3Component},
  { path: 'cualidades', component: CualidadesComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'home', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
