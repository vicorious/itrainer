import { Component, OnInit } from '@angular/core';

import {EnrutamientoService}   from '../../services/enrutamiento.service';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-registrarse',
  providers: [EnrutamientoService],  
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit 
{

  constructor(private _enrutamiento: EnrutamientoService, private ngProgress: NgProgress) { }

  ngOnInit() 
  {
	  
  }//ngOnInit
  
  /**
  *
  *
  *
  *
  **/
  home()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.home();
	  this.ngProgress.done();	  
	  
  }//logueo
  
  /**
  *
  *
  *
  *
  **/
  finalizarRegistro()
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
	 

	 // When the user clicks anywhere outside of the modal, close it
	 window.addEventListener('click', (evento) => this.cerrarModal(evento, modal)); 
	  
	 this.ngProgress.done();		  
	  
  }//finalizarRegistro  
  
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
		 this.home();	
	  }	  
	  
  }//cerrarModal

}//NoBorrar
