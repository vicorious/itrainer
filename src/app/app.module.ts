import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { AgendarComponent } from './components/agendar/agendar/agendar.component';
import { PerfilComponent } from './components/perfiles/perfil/perfil.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './routes/app-routing.module';
import { LoginComponent } from './components/home/login/login.component';
import { CualidadesComponent } from './components/cualidades/cualidades.component';
import { ValoracionComponent } from './components/valoracion/valoracion/valoracion.component';
import { Valoracion2Component } from './components/valoracion/valoracion2/valoracion2.component';
import { Valoracion3Component } from './components/valoracion/valoracion3/valoracion3.component';
import { BienvenidoComponent } from './components/welcome/bienvenido/bienvenido.component';
import { CalendarioComponent } from './components/calendario/calendario/calendario.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion/evaluacion.component';
import { Evaluacion2Component } from './components/evaluacion/evaluacion2/evaluacion2.component';
import { Evaluacion3Component } from './components/evaluacion/evaluacion3/evaluacion3.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

const appRoutes: Routes = 
[
  { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AgendarComponent,
    PerfilComponent,
    LoginComponent,
    CualidadesComponent,
    ValoracionComponent,
    Valoracion2Component,
    Valoracion3Component,
    BienvenidoComponent,
    CalendarioComponent,
    EvaluacionComponent,
    Evaluacion2Component,
    Evaluacion3Component,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), AppRoutingModule, NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
