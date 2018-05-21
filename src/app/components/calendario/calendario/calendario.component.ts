import { Component, OnInit } from '@angular/core';
import {EnrutamientoService}   from '../../../services/enrutamiento.service';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

//validaciones
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendario',
  providers: [EnrutamientoService],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit 
{
	
	public hora 		: string;
	public numero_horas	: string;
	
	calendario_form		: FormGroup;

  constructor(private _enrutamiento: EnrutamientoService, private ngProgress: NgProgress) { }

  /**
  *
  *
  *
  **/
  ngOnInit() 
  {
	  this.mostrarModal();
	  
	  this.calendario_form = new FormGroup
	  ({
			'hora': new FormControl
			(				
				Validators.required
			),
			'numero_horas': new FormControl
			(				
				Validators.required							
			)
	  });	  
	  
  }//ngOnInit
  
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
  
  /**
  *
  *
  *
  **/
  mostrarModalConfirmacion()
  {
	  //Modal confirmation
	 var modal_confirmation = document.getElementById('myModalConfirmation');	 
	 var modal = document.getElementById('myModal');
	 modal.style.display = "none";
	 modal_confirmation.style.display = "block";
	 
  }//mostrarModalConfirmacion
  
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

	 // Get the <span> element that closes the modal
	 var span = document.getElementsByClassName("close")[0];
	 
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

	 // When the user clicks on <span> (x), close the modal
	 span.addEventListener('click', function() 
	 {
		 modal.style.display = "none";
	 });
	 
	 span_confirmation.addEventListener('click', function() 
	 {
		 modal_confirmation.style.display = "none";
	 });
	 
  }//mostrarModal
  
  /**
  *
  *
  *
  **/
  mostrarFinalModal()
  {
	 //Ocultar modal anterior
	 var modal_confirmation = document.getElementById('myModalConfirmation');	
	 modal_confirmation.style.display = "none";
	  // Get the modal
	 var modal = document.getElementById('myModalFinalConfirmation');
	 
	 // Get the button that opens the modal
	 var btns = document.getElementsByClassName("myBtn");
	 
	 //Modal confirmation
	 var span_confirmation = document.getElementsByClassName("close-confirmation")[0];

	 modal.style.display = "block";
	 
	 //setTimeout(5000, this.perfil());	 
	 
	 span_confirmation.addEventListener('click', function() 
	 {
		 modal.style.display = "none";
	 });

	 // When the user clicks anywhere outside of the modal, close it
	 window.addEventListener('click', (evento) => this.cerrarModal(evento, modal)); 
	 {
		 if (event.target == modal) 
		 {
			 modal.style.display = "none";			 
		 }
	 });
	 
  }//mostrarFinalModal
  
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

}//NoBorrar
