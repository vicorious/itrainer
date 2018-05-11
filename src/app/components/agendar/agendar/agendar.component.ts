import { Component, OnInit } from '@angular/core';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';

//validaciones
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component
({
  selector: 'app-root',
  providers: [EnrutamientoService],
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})

/**
*
*
*
**/
export class AgendarComponent implements OnInit 
{
	public hora: string;
	
	header_form		: FormGroup;

  constructor(private ngProgress: NgProgress, private _enrutamiento: EnrutamientoService) { }

  /**
  *
  *
  *
  **/
  ngOnInit() 
  {
	  /**
		*
		* Eventos de los reportes
		*
		**/
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = "assets/agendar/js/eventos-cards.js";
		document.body.appendChild(script);
		
		this.header_form = new FormGroup
		({
			'hora': new FormControl
			(				
				Validators.required
			)
		});		
		
		this.mostrarModal();
		
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
  cargarProfesores()
  {
	  this.ngProgress.start();
	  setTimeout(function(){ console.log("Hello"); }, 15000);
	  this.ngProgress.done();
	  
  }//cargarProfesores
  
  /**
  *
  *
  *
  **/
  cualidades()
  {
	  this.ngProgress.start();
	  setTimeout(function(){ console.log("Hello"); }, 5000);
	  //this._router.navigate(['/cualidades']);
	  this.ngProgress.done();
	  
  }//cualidades
  
  /**
  *
  *
  *
  **/
  calendario()
  {
	  this.ngProgress.start();	  
	  this._enrutamiento.calendario();
	  this.ngProgress.done();	 
	  
  }//calendario
  
  /**
  *
  *
  *
  **/
  getToday()
  {
	  document.getElementById("agendar_today").valueAsDate = new Date();
	  
	  this.header_form.controls['hora'].invalid === false;
	  this.header_form.setErrors({ 'invalid': false });
	  
	  console.log(this.header_form.controls['hora']);
	  
  }//getToday
  
  /**
  *
  *
  *
  **/
  mostrarModal()
  {
	  // Get the modal
	 var modal = document.getElementById('myModal');

	 // Get the button that opens the modal
	 var btns = document.getElementsByClassName("myBtn");

	 // Get the <span> element that closes the modal
	 var span = document.getElementsByClassName("close")[0];

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

	 // When the user clicks anywhere outside of the modal, close it
	 window.addEventListener('click', function(event) 
	 {
		 if (event.target == modal) 
		 {
			 modal.style.display = "none";
		 }
	 });
	 
  }//mostrarModal

}//NoBorrar
