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
  
}//NoBorrar
