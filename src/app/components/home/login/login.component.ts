import { Component, OnInit } from '@angular/core';

//validaciones
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';

//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-login',
  providers: [EnrutamientoService],
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
  
  
  constructor(private ngProgress: NgProgress, private _enrutamiento: EnrutamientoService)
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
  


}//NoBorrar
