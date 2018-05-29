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
		
		this.mostrarModal();
		
		this.mostrarModalPuntos();
		
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
  
  /**
  *
  *
  *
  **/
  evaluaciones()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.evaluacion();
	  this.ngProgress.done();
	  
  }//evaluaciones
  
 /**
  *
  *
  *
  **/
  mostrarModal()
  {
	  // Get the modal
	 var modal = document.getElementById('myModal');
	 
	 //Modal confirmation
	 var modal_confirmation = document.getElementById('myModalConfirmation');

	 // Get the button that opens the modal
	 var btns = document.getElementsByClassName("myBtn");
	 
	 //Modal confirmation
	 var span_confirmation = document.getElementsByClassName("close-confirmation")[0];

	 for(var i = 0; i < btns.length; i++)
	 {
		 var btn = btns[i];
		// When the user clicks the button, open the modal 
		btn.addEventListener('click', function() 
		{
			modal.style.display = "block";
		});
	 }

	 
	 span_confirmation.addEventListener('click', function() 
	 {
		 modal.style.display = "none";
	 });

	 // When the user clicks anywhere outside of the modal, close it
	 window.addEventListener('click', function(event) 
	 {
		 if (event.target == modal) 
		 {
			 modal.style.display = "none";			 
		 }
	 });
	 
  }//mostrarModal  
  
  /**
  *
  *
  *
  **/
  mostrarModalPuntos()
  {
	  // Get the modal
	 var modal = document.getElementById('myModalPuntos');	

	// Get the button that opens the modal
	 var btns = document.getElementsByClassName("puntos");
	 
	 //Modal confirmation
	 var span = document.getElementsByClassName("close")[0];
	  
	 span.addEventListener('click', function() 
	 {
		 modal.style.display = "none";
	 });
	 
	 for(var i = 0; i < btns.length; i++)
	 {
		 var btn = btns[i];
		// When the user clicks the button, open the modal 
		btn.addEventListener('click', function() 
		{
			modal.style.display = "block";
		});
	 } 	 	
	 
  }//mostrarModalPuntos
  
    /**
  *
  *
  *
  **/
  felicitaciones()
  {
	 this.ngProgress.start();
	 
	 var modal2 = document.getElementById('myModalPuntos');
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
