import { Component, OnInit } from '@angular/core';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-valoracion2',
  providers: [EnrutamientoService],
  templateUrl: './valoracion2.component.html',
  styleUrls: ['./valoracion2.component.css']
})
export class Valoracion2Component implements OnInit 
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
  
    
  valoracion3()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.valoracion3();
	  this.ngProgress.done();
	  
  }//valoracion3
  
  perfil()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.perfil();
	  this.ngProgress.done();  
	  
  }//perfil  

}//NoBorrar
