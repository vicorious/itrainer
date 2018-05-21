import { Injectable } from '@angular/core';
//Route, para enrutar paginas
import { Router }  from '@angular/router';


@Injectable()
export class EnrutamientoService 
{
	public root_perfil  	= "/perfil";
	public root_agendar 	= "/agendar";
	public root_home    	= "/home";
	public root_valoracion	= "/valoracion";
	public root_valoracion2 = "/valoracion2";
	public root_valoracion3 = "/valoracion3";
	public root_bienvenido  = "/bienvenido";
	public root_calendario	= "/calendario";
	public root_evaluacion  = "/evaluacion";
	public root_evaluacion2 = "/evaluacion2";
	public root_evaluacion3 = "/evaluacion3";
	public root_registrarme = "/registrarse";

	constructor(private _router: Router) { }
	
	perfil()
	{
		this._router.navigate([this.root_perfil]);
		
	}//perfil
	
	agendar()
	{
		this._router.navigate([this.root_agendar]);
		
	}//agendar
	
	home()
	{
		this._router.navigate([this.root_home]);
		
	}//home
	
	valoracion()
	{
		this._router.navigate([this.root_valoracion]);
		
	}//valoracion
	
	valoracion2()
	{
		this._router.navigate([this.root_valoracion2]);
		
	}//valoracion2
	
	valoracion3()
	{
		this._router.navigate([this.root_valoracion3]);
		
	}//valoracion3
	
	bienvenido()
	{
		this._router.navigate([this.root_bienvenido]);
		
	}//bienvenido
	
	calendario()
	{
		this._router.navigate([this.root_calendario]);
		
	}//calendario
	
	evaluacion()
	{
		this._router.navigate([this.root_evaluacion]);
		
	}//evaluacion
	
	evaluacion2()
	{
		this._router.navigate([this.root_evaluacion2]);
		
	}//evaluacion2
	
	evaluacion3()
	{
		this._router.navigate([this.root_evaluacion3]);
		
	}//evaluacion3
	
	registrarme()
	{
		this._router.navigate([this.root_registrarme]);
		
	}//registrarme
  
}//NoBorrar
