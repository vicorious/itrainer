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

	constructor(private _http: Http) 
	{
		this.url_valoracion_por_tipo 		= HOST+"/valoracion_tipo";
		this.url_trainers			 		= HOST+"/trainers";
		this.url_login				 		= HOST+"/login";
		this.url_registrarse		 		= HOST+"/registrarse";
		this.url_olvido_contrasena	 		= HOST+"/olvido_contrasena";
		this.url_valoracion_default	 		= HOST+"/valoracion_default";
		this.url_valoracion_por_tipo 		= HOST+"/valoracion_tipo";
		this.url_asociar_respuesta_pregunta = HOST+"/asociar_respuesta_valoracion";
		this.url_tipos_agendamiento			= HOST+"/tipos_agendamiento_default";
		this.url_agendar					= HOST+"/agendar";
		this.url_re_agendar					= HOST+"/re_agendar";
		this.url_cancelar_agenda			= HOST+"/cancela_agenda";
		this.url_calificar_agenda_trainer	= HOST+"/calificar_agenda_trainer";
		this.url_calificar_agenda_usuario   = HOST+"/calificar_agenda_usuario";
		this.url_actualizar_costo			= HOST+"/actualizar_costo";
		this.url_premios_trainer			= HOST+"/premios_trainer";
		this.url_premios_usuario			= HOST+"/premios_usuario";
		this.url_asociar_trainer_premio		= HOST+"/asociar_trainer_premio";
		this.url_asociar_usuario_premio     = HOST+"/asociar_usuario_premio";
		this.url_crear_examen				= HOST+"/crear_examen";
		this.url_tipos_examen				= HOST+"/tipos_examen";
		this.url_cualidad_trainer			= HOST+"/cualidad_trainer";
		this.url_cualidades					= HOST+"/cualidades";
		this.url_actualiza_trainer			= HOST+"/actualizar_trainer";
							
	}//Constructor
  
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
	* Retorna todos los trainer
	*
	**/
	trainers():Observable<any>
	{
		return this._http.post(this.url_trainers,_json).map
		(
			res =>
			{															
				return res.json();
			}
		);		
		
	}//trainers

}//NoBorrar
