import { Injectable } from '@angular/core';
//Componentes para el request
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

/**
*
*
* Servicio encargado de llamar los servicios WEB
*
**/
@Injectable()
export class CallserviceService 
{
	HOST					   		: string = 'http://127.0.0.1:5000';
	url_valoracion_por_tipo    		: string;
	url_trainers			   		: string;
	url_login				   		: string;
	url_registrarse            		: string;
	url_olvido_contrasena	   		: string;
	url_valoracion_default     		: string;
	url_valoracion_tipo        		: string;
	url_asociar_respuesta_pregunta  : string;
	url_tipos_agendamiento			: string;
	url_agendar						: string;
	url_re_agendar					: string;
	url_cancelar_agenda				: string;
	url_calificar_agenda_trainer    : string;
	url_calificar_agenda_usuario	: string;
	url_actualizar_costo			: string;
	url_premios_trainer				: string;
	url_premios_usuario				: string;
	url_asociar_trainer_premio      : string;
	url_asociar_usuario_premio		: string;
	url_crear_examen				: string;
	url_tipos_examen				: string;
	url_cualidad_trainer			: string;
	url_cualidades					: string;
	url_actualiza_trainer			: string;
	url_calendario					: string;
	url_proveedor_usuario			: string;
	url_proveedor_trainer			: string;

	constructor(private _http: Http) 
	{
		this.url_valoracion_por_tipo 		= this.HOST+"/valoracion_tipo";
		this.url_trainers			 		= this.HOST+"/trainers";
		this.url_login				 		= this.HOST+"/login";
		this.url_registrarse		 		= this.HOST+"/registrarse";
		this.url_olvido_contrasena	 		= this.HOST+"/olvido_contrasena";
		this.url_valoracion_default	 		= this.HOST+"/valoracion_default";
		this.url_valoracion_por_tipo 		= this.HOST+"/valoracion_tipo";
		this.url_asociar_respuesta_pregunta = this.HOST+"/asociar_respuesta_valoracion";
		this.url_tipos_agendamiento			= this.HOST+"/tipos_agendamiento_default";
		this.url_agendar					= this.HOST+"/agendar";
		this.url_re_agendar					= this.HOST+"/re_agendar";
		this.url_cancelar_agenda			= this.HOST+"/cancela_agenda";
		this.url_calificar_agenda_trainer	= this.HOST+"/calificar_agenda_trainer";
		this.url_calificar_agenda_usuario   = this.HOST+"/calificar_agenda_usuario";
		this.url_actualizar_costo			= this.HOST+"/actualizar_costo";
		this.url_premios_trainer			= this.HOST+"/premios_trainer";
		this.url_premios_usuario			= this.HOST+"/premios_usuario";
		this.url_asociar_trainer_premio		= this.HOST+"/asociar_trainer_premio";
		this.url_asociar_usuario_premio     = this.HOST+"/asociar_usuario_premio";
		this.url_crear_examen				= this.HOST+"/crear_examen";
		this.url_tipos_examen				= this.HOST+"/tipos_examen";
		this.url_cualidad_trainer			= this.HOST+"/cualidad_trainer";
		this.url_cualidades					= this.HOST+"/cualidades";
		this.url_actualiza_trainer			= this.HOST+"/actualizar_trainer";
		this.url_calendario					= this.HOST+"/calendario_actual";
		this.url_proveedor_usuario			= this.HOST+"/proveedor_usuario";
		this.url_proveedor_trainer			= this.HOST+"/proveedor_trainer";
							
	}//Constructor
	
	/**
	*
	*
	* GET
	*
	*
	**/
	
	/**
	*
	* Valoraciones default
	*
	**/
	valoracion_default():Observable<any>
	{
		return this._http.get(this.url_valoracion_default).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//valoracion_default
	
	/**
	*
	* Tipos agendamiento default
	*
	**/
	tipo_agendamiento_default():Observable<any>
	{
		return this._http.get(this.url_tipos_agendamiento).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//tipo_agendamiento_default
	
	/**
	*
	* Premios trainer
	*
	**/
	premios_trainer():Observable<any>
	{
		return this._http.get(this.url_premios_trainer).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//premios_trainer
	
	/**
	*
	* Premios usuario
	*
	**/
	premios_usuario():Observable<any>
	{
		return this._http.get(this.url_premios_usuario).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//premios_usuario
	
	/**
	*
	* Tipos examen
	*
	**/
	tipos_examen():Observable<any>
	{
		return this._http.get(this.url_tipos_examen).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//tipos_examen	
	
	/**
	*
	* Retorna todos los trainer
	*
	**/
	trainers():Observable<any>
	{
		return this._http.get(this.url_trainers).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//trainers
	
	/**
	*
	* Cualidades
	*
	**/
	cualidades():Observable<any>
	{
		return this._http.get(this.url_cualidades).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//cualidades

	/**
	*
	* Calendario
	*
	**/
	calendario():Observable<any>
	{
		return this._http.get(this.url_calendario).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//calendario
  
	/**
	*
	* Valoraciones por tipo
	*
	**/
	valoraciones(valoracion_id):Observable<any>
	{
		var _json = 
		{
			tipo_valoracion_id : valoracion_id
		}
		
		return this._http.post(this.url_valoracion_por_tipo,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);							
	  
	}//valoraciones
	
	/**
	*
	*
	*
	**/
	evaluaciones():Observable<any>
	{		
		return this._http.post(this.url_valoracion_por_tipo,null).map
		(
			res =>
			{															
				return res.json();
			}
		);							
	  
	}//valoraciones	
	
	/**
	*
	*
	* POST
	*
	*
	**/
	
	/**
	*
	*
	* Encargado de realizar el login
	*
	**/
	login(_json):Observable<any>
	{
		return this._http.post(this.url_login,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//login
	
	/**
	*
	*
	* Encargado de registrarse
	*
	**/
	registrarse(_json):Observable<any>
	{
		return this._http.post(this.url_registrarse,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//registrarse
	
	/**
	*
	*
	* Encargado de olvido contrasena
	*
	**/
	olvido_contrasena(_json):Observable<any>
	{
		return this._http.post(this.url_olvido_contrasena,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//olvido_contrasena
	
	/**
	*
	*
	* Encargado de valoracion_tipo
	*
	**/
	valoracion_tipo(_json):Observable<any>
	{
		return this._http.post(this.url_valoracion_tipo,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//valoracion_tipo
	
	/**
	*
	*
	* Encargado de asociar_respuesta_valoracion
	*
	**/
	asociar_respuesta_valoracion(_json):Observable<any>
	{
		return this._http.post(this.url_asociar_respuesta_pregunta,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//asociar_respuesta_valoracion
	
	/**
	*
	*
	* Encargado de agendar
	*
	**/
	agendar(_json):Observable<any>
	{
		return this._http.post(this.url_agendar,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//agendar
	
	/**
	*
	*
	* Encargado de re agendar
	*
	**/
	re_agendar(_json):Observable<any>
	{
		return this._http.post(this.url_re_agendar,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//re_agendar
	
	/**
	*
	*
	* Encargado de cancelar agenda
	*
	**/
	cancela_agenda(_json):Observable<any>
	{
		return this._http.post(this.url_cancelar_agenda,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//cancela_agenda
	
	/**
	*
	*
	* Encargado de url_calificar_agenda_trainer
	*
	**/
	calificar_agenda_trainer(_json):Observable<any>
	{
		return this._http.post(this.url_calificar_agenda_trainer,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//calificar_agenda_trainer
	
	/**
	*
	*
	* Encargado de url_calificar_agenda_usuario
	*
	**/
	calificar_agenda_usuario(_json):Observable<any>
	{
		return this._http.post(this.url_calificar_agenda_usuario,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//calificar_agenda_trainer
	
	/**
	*
	*
	* Encargado de actualizar_costo
	*
	**/
	actualizar_costo(_json):Observable<any>
	{
		return this._http.post(this.url_actualizar_costo,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//actualizar_costo
	
	/**
	*
	*
	* Encargado de asociar_trainer_premio
	*
	**/
	asociar_trainer_premio(_json):Observable<any>
	{
		return this._http.post(this.url_asociar_trainer_premio,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//asociar_trainer_premio
	
	/**
	*
	*
	* Encargado de url_asociar_usuario_premio
	*
	**/
	asociar_usuario_premio(_json):Observable<any>
	{
		return this._http.post(this.url_asociar_usuario_premio,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//asociar_usuario_premio
	
	/**
	*
	*
	* Encargado de url_asociar_usuario_premio
	*
	**/
	crear_examen(_json):Observable<any>
	{
		return this._http.post(this.url_crear_examen,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//crear_examen
	
	/**
	*
	*
	* Encargado de cualidad_trainer
	*
	**/
	cualidad_trainer(_json):Observable<any>
	{
		return this._http.post(this.url_cualidad_trainer,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//cualidad_trainer
	
	/**
	*
	*
	* Encargado de actualizar_trainer
	*
	**/
	actualizar_trainer(_json):Observable<any>
	{
		return this._http.post(this.url_actualiza_trainer,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//actualizar_trainer	
	
	/**
	*
	*
	* Encargado de proveedor_usuario
	*
	**/
	proveedor_usuario(_json):Observable<any>
	{
		return this._http.post(this.url_proveedor_usuario,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//proveedor_usuario	
	
	/**
	*
	*
	* Encargado de proveedor_trainer
	*
	**/
	proveedor_trainer(_json):Observable<any>
	{
		return this._http.post(this.url_proveedor_trainer,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);	
		
	}//proveedor_trainer
		
	


}//NoBorrar
