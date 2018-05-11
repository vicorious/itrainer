import { Component, OnInit } from '@angular/core';
//Progress bar
import { NgProgress } from 'ngx-progressbar';
//Route, para enrutar paginas
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './cualidades.component.html',
  styleUrls: ['./cualidades.component.css']
})
export class CualidadesComponent implements OnInit 
{

  constructor(private _router: Router, private ngProgress: NgProgress) { }

  ngOnInit() 
  {
	 /**
	  *
	  * Eventos de los reportes
	  *
	  **/
	  var script = document.createElement('script');
	  script.type = "text/javascript";
	  script.src = "assets/cualidades/js/tabla2.js";
	  document.body.appendChild(script);
	  
  }//ngOnInit
  
  /**
  *
  *
  *
  **/
  perfil()
  {
	  this.ngProgress.start();
	  setTimeout(function(){ console.log("Hello"); }, 5000);
	  this._router.navigate(['/perfil']);
	  this.ngProgress.done();
	  
  }//perfil

}//NoBorrar
