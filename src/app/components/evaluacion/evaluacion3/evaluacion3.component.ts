import { Component, OnInit } from '@angular/core';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-evaluacion3',
  providers: [EnrutamientoService],
  templateUrl: './evaluacion3.component.html',
  styleUrls: ['./evaluacion3.component.css']
})
export class Evaluacion3Component implements OnInit 
{

  constructor(private _enrutamiento: EnrutamientoService, private ngProgress: NgProgress) { }

  /**
  *
  *
  *
  *
  **/
  ngOnInit() 
  {
	  
  }//ngOnInit
  
  /**
  *
  *
  *
  *
  **/
  finalizarEvaluacion()
  {
	 this.ngProgress.start();  	  
	  // Get the modal
	 var modal = document.getElementById('myModal');
	 	 
	 // Get the <span> element that closes the modal
	 var span = document.getElementsByClassName("close")[0];	 	

	 // When the user clicks on <span> (x), close the modal
	 span.addEventListener('click', function() 
	 {
		 modal.style.display = "none";
	 });

	 modal.style.display = "block";	 
	  
	 this.ngProgress.done();		  
	  
  }//finalizarEvaluacion
  
  /**
  *
  *
  *
  **/
  felicitaciones()
  {
	 this.ngProgress.start();
	 
	 var modal2 = document.getElementById('myModal');	 +
	 modal2.style.display = "none";
	  // Get the modal
	 var modal = document.getElementById('myModalC');
	 	 
	 // Get the <span> element that closes the modal
	 var span = document.getElementsByClassName("close")[0];	 	

	 // When the user clicks on <span> (x), close the modal
	 span.addEventListener('click', function() 
	 {
		 modal.style.display = "none";
	 });

	 modal.style.display = "block";	 
	  
	 // When the user clicks anywhere outside of the modal, close it
	 window.addEventListener('click', (evento) => this.cerrarModal(evento, modal)); 
	  
	 this.ngProgress.done();		  
	  
  }//felicitaciones  
  
  /**
  *
  *
  *
  **/
  cerrarModal(event, modal)
  {
	  if (event.target == modal) 
	  {
		 modal.style.display = "none";
		 this.perfil();
	  }	  
	  
  }//cerrarModal
  
  /**
  *
  *
  *
  **/
  perfil()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.perfil();
	  this.ngProgress.done();
	  
  }//perfil

}//NoBorrar
