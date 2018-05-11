import { Component, OnInit } from '@angular/core';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';

@Component({
  selector: 'app-root',
  providers: [EnrutamientoService],
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit 
{

  constructor(private _enrutamiento: EnrutamientoService, private ngProgress: NgProgress) { }

  ngOnInit() 
  {
	 /**
	  *
	  * Eventos de los reportes
	  *
	  **/
	  var script = document.createElement('script');
	  script.type = "text/javascript";
	  script.src = "assets/ContactFrom_v1/js/main.js";
	  document.body.appendChild(script);
	  
  }//ngOnInit
  
  perfil()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.perfil();
	  this.ngProgress.done();  
	  
  }//perfil
  
  valoracion2()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.valoracion2();
	  this.ngProgress.done();
	  
  }//valoracion2

}//NoBorrar
