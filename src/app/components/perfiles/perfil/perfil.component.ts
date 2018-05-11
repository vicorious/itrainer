import { Component, OnInit } from '@angular/core';

//Progress bar
import { NgProgress } from 'ngx-progressbar';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';

@Component({
  selector: 'app-root',
  providers: [EnrutamientoService],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit 
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
		script.src = "assets/perfil/perfil_tab.js";
		document.body.appendChild(script);
		
  }//ngOnInit
  
  /**
  *
  *
  *
  **/
  agendar()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.agendar();
	  this.ngProgress.done();
	  
  }//agendar

}//NoBorrar
