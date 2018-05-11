import { Component, OnInit } from '@angular/core';

//Progress bar
import { NgProgress } from 'ngx-progressbar';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';

@Component({
  selector: 'app-valoracion3',
  providers: [EnrutamientoService],
  templateUrl: './valoracion3.component.html',
  styleUrls: ['./valoracion3.component.css']
})
export class Valoracion3Component implements OnInit 
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
  }
  
  perfil()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.perfil();
	  this.ngProgress.done();  
	  
  }//perfil 

  finalizar()  
  {
	  this.ngProgress.start();  
	  this._enrutamiento.bienvenido();
	  this.ngProgress.done(); 	  
  }

}//NoBorrar
