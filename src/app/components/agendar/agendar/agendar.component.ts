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
		this.cargarModalErrores();
		
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
	  var modal = document.getElementById("confirmacionModal");  
	  if(this.hora == undefined)
	  {
		  modal.style.display = "block";
		  return;
	  }
		  
	  var fecha_correcta = true;
	  var fecha = /(\d+)\-(\d+)\-(\d+)/g
	  var now = new Date();
	  var day = ("0" + now.getDate()).slice(-2);
	  var month = ("0" + (now.getMonth() + 1)).slice(-2);
	  
	  var resultado = fecha.exec(this.hora.toString());
	  
	  console.log(resultado);
	  
	  var ano = parseInt(resultado[1]);
	  var mes = parseInt(resultado[2]);
	  var dia = parseInt(resultado[3]);
	  
	  var dia_actual = parseInt(("0" + now.getDate()).slice(-2));
	  var mes_actual = parseInt(("0" + (now.getMonth() + 1)).slice(-2));
	  var ano_actual = now.getFullYear();	  	  
	  
	  if((dia != dia_actual) || (mes != mes_actual) || (ano != ano_actual))
		  fecha_correcta = false;
	  	  	  
	  this.ngProgress.start();
	  	  	 	  	    
	  if(fecha_correcta == false)
	  {
		  modal.style.display = "block";
	  }else
	  {
		  modal.style.display = "none";
	  }
	  console.log(this.hora);
	  this.ngProgress.done();
	  
  }//cargarProfesores
  
  /**
  *
  *
  *
  *
  **/
  cargarModalErrores()
  {
	  var modal = document.getElementById("confirmacionModal");
	  var close_i = document.getElementById("closeerror");
	  close_i.addEventListener('click', function(event) 
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
	  
  }//cargarModalErrores
  
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
		var now = new Date();

		var day = ("0" + now.getDate()).slice(-2);
		var month = ("0" + (now.getMonth() + 1)).slice(-2);

		var today = now.getFullYear()+"-"+(month)+"-"+(day);

		console.log(today);

		(<HTMLInputElement>document.getElementById("agendar_today")).setAttribute("value",today);
		(<HTMLInputElement>document.getElementById("agendar_today")).setAttribute("text",today);
	  
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
