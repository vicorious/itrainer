import { Component, OnInit } from '@angular/core';

//validaciones
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';
import {CallserviceService}   from '../../../services/callservice.service';

//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-login',
  providers: [EnrutamientoService, CallserviceService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  contrasena: string = '';
  correo	: string = '';  
  loginForm				: FormGroup;
  
  /**
  *
  *
  *
  **/
  ngOnInit()
  {
  	/**
	*
	*
	* Validaciones
	*
	**/
	this.loginForm = new FormGroup
	({
		'correo': new FormControl
		(				
			Validators.required
		),
		'contrasena': new FormControl
		(				
			Validators.required,
			Validators.minLength(4)				
		)
	});	  
	
		/**
		*
		* Eventos de los reportes
		*
		**/
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = "assets/Login_v18/js/main.js";
		document.body.appendChild(script);
	  
  }//ngOnInit
  
  
  constructor(private ngProgress: NgProgress, private _enrutamiento: EnrutamientoService, private _servicios: CallserviceService)
  {
  }
  
  /**
  *
  *
  *
  *
  **/
  logueo()
  {	 
	  this.ngProgress.start();  
	  this._enrutamiento.valoracion();
	  this.ngProgress.done();
	  
  }//logueo
  
  /**
  *
  *
  *
  **/
  registrarme()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.registrarme();
	  this.ngProgress.done();	  
  }//registrarme
  
  /**
  *
  *
  * Logueo
  *
  **/
  login()
  {
	  var body = 
	  {
		  email 		: this.correo,
		  contrasena	: this.contrasena
	  }
	  	 	  
	  this._servicios.login(JSON.stringify(body)).subscribe(function (data) 
	  {
		  if(data == 409)
		  {
			  //Paila
			  return;
		  }
		  else if(data == 200 || data == 204)
		  {
			  //Aqui termino bien
		  }
		  
      });
	  
  }//login
  


}//NoBorrar
