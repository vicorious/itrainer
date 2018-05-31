import { Injectable } from '@angular/core';

/**
*
* Encargado de renderizar el HTML
*
**/
@Injectable()
export class RenderizadorService 
{
	ELEGIR = 'Elegir!';
	SOCIAL = 'Social';

	constructor() {}//Constructor
  
	/**
	*
	* Trainers
	*
	**/
	trainers(_json)
	{
		for(let elemento of _json)
		{

			var div_padre 			= document.createElement('div');
			var article   			= document.createElement('article');
			// Tittle
			var h2_tittle 			= document.createElement('h2');
			var span_tittle			= document.createElement('span');
			var strong_tittle		= document.createElement('strong');
			var i_tittle			= document.createElement('i');
			//Content
			var div_content			= document.createElement('div');
			var div_img_container	= document.createElement('div');
			var img					= document.createElement('img');
			var div_description     = document.createElement('div');
			var button_choose		= document.createElement('button');
			var br					= document.createElement('br');
			//effect choose button
			var a_button			= document.createElement('a');
			var i_button			= document.createElement('i');
			//Footer
			var div_footer			= document.createElement('div');
			var h4_footer			= document.createElement('h4');
			var a_facebook			= document.createElement('a');
			var a_twitter			= document.createElement('a');
			var a_linkedin			= document.createElement('a');
			var a_google			= document.createElement('a');
			

			
			// Parents
			div_padre.className   		= 'col-md-4 col-sm-6 col-xs-12';
			article.className     		= 'material-card Red';			
			//Titles
			i_tittle.className    		= 'fa fa-fw fa-star';
			//Content
			div_content.className 		= 'mc-content';
			div_img_container.className = 'img-container';
			img.className				= 'img-responsive';
			div_description.className   = 'mc-description';
			button_choose.className     = 'btn-primary center myBtn';
			//effect choose button
			a_button.className			= 'mc-btn-action';
			i_button.className          = 'fa fa-bars';
			//Footer
			div_footer.className        = 'mc-footer';
			a_facebook.className        = 'fa fa-fw fa-facebook mouse';
			a_twitter.className         = 'fa fa-fw fa-twitter mouse';
			a_linkedin.className		= 'fa fa-fw fa-linkedin mouse';
			a_google.className			= 'fa fa-fw fa-google-plus mouse';
			

			
			//title
			span_tittle.innerHTML 		= elemento.nombre;
			strong_tittle.innerHTML     = elemento.nombre;
			//Content
			img.setAttribute('src',elemento.foto);
			button_choose.innerHTML     = this.ELEGIR;
			div_description.innerHTML   = elemento.descripcion;
			//Footer
			h4_footer.innerHTML         = this.SOCIAL;
			a_facebook.innerHTML		= elemento.facebook;
			a_twitter.innerHTML			= elemento.twitter;
			a_linkedin.innerHTML		= elemento.linkedin;
			a_google					= elemento.instagram;
	
			
			// Title
			strong_tittle.appendChild(i_tittle);
			h2_tittle.appendChild(span_tittle);
			h2_tittle.appendChild(strong_tittle);
			//Content
			div_description.appendChild(button_choose);
			div_description.appendChild(br);
			
			div_img_container.appendChild(img);
			
			div_content.appendChild(div_img_container);
			div_content.appendChild(div_description);
			
			a_button.appendChild(i_button);
			
			//Footer
			div_footer.appendChild(h4_footer);
			div_footer.appendChild(a_facebook);
			div_footer.appendChild(a_twitter);
			div_footer.appendChild(a_linkedin);
			div_footer.appendChild(a_google);
			
			//Parents
			article.appendChild(h2_tittle);
			article.appendChild(div_content);
			article.appendChild(a_button);
			article.appendChild(div_footer);
			
			div_padre.appendChild(article);						
			
		}//jsonEach
		
	}//trainers
	
	/**
	*
	* Valoraciones default
	*
	**/
	valoraciones_default(_json)
	{
		var div_parent      = document.createElement("div");
		var div_container   = document.createElement("div");
		//Contact
		var div_contact		= document.createElement("div");
		var img_contact     = document.createElement("img");
		
		//Form
		var _form			= document.createElement("form");
		var span_form		= document.createElement("span");
		
		//Botones
		var div_boton		= document.createElement("div");
		var button_enviar	= document.createElement("button");
		var span_button		= document.createElement("span");
		var i_button		= document.createElement("i");
		
		/**
		*
		* Asignaciones antes de iterar
		*
		**/
		div_parent.className 	= "contact1";
		div_container.className = "container-contact1";
		
		//IMG
		img_contact.setAttribute("src", _json.src_img);
		img_contact.setAttribute("alt", "IMG");
		
		div_contact.setAttribute("data-tilt");
		div_contact.className = "contact1-pic js-tilt";
		
		// Form
		_form.className = "contact1-form validate-form";
		span_form.className = "contact1-form-title";		
		
		/**
		*
		* Jerarquia
		*
		**/
		_form.appendChild(span_form);		
		div_contact.appendChild(img_contact);
		
		div_container.appendChild(div_contact);
		
		
		for(let elemento of _json.questions)
		{
			var input_elemento  = null;
			var div_elemento 	= document.createElement("div");
			var span_elemento      = document.createElement("span");	
			
			if(elemento.tipo == 'input')
			{
				input_elemento = document.createElement("input");
				input_elemento.setAttribute("type","text");
			}else if(elemento.tipo == 'textarea')
			{
				input_elemento = document.createElement("textarea");
			}else
			{
				input_elemento = document.createElement("input");
				input_elemento.setAttribute("type","text");
			}
								
			div_elemento.className = "wrap-input1 validate-input";
			div_elemento.setAttribute("data-validate",elemento.mensaje_alerta);
			
			input_elemento.className = "input1";
			input.setAttribute("name",elemento.nombre);
			input.setAttribute("placeholder", elemento.nombre);
			
			span_elemento.className = "shadow-input1";
			
			div_elemento.appendChild(input_elemento);
			div_elemento.appendChild(span_elemento);
			
			_form.appendChild(div_elemento);
			
		}//for
		
		//Botones
		
		span_button.appendChild(i_button);
		button_enviar.appendChild(span_button);
		
		div_boton.appendChild(button_enviar);
		
		_form.appendChild(div_boton);
		
		div_container.appendChild(_form);
		
		div_parent.appendChild(div_container);
						
	}//valoraciones
	
	/**
	*
	* Valoraciones default
	*
	**/
	evaluaciones(_json)
	{
		var div_parent      = document.createElement("div");
		var div_container   = document.createElement("div");
		//Contact
		var div_contact		= document.createElement("div");
		var img_contact     = document.createElement("img");
		
		//Form
		var _form			= document.createElement("form");
		var span_form		= document.createElement("span");
		
		//Botones
		var div_boton		= document.createElement("div");
		var button_enviar	= document.createElement("button");
		var span_button		= document.createElement("span");
		var i_button		= document.createElement("i");
		
		/**
		*
		* Asignaciones antes de iterar
		*
		**/
		div_parent.className 	= "contact1";
		div_container.className = "container-contact1";
		
		//IMG
		img_contact.setAttribute("src", _json.src_img);
		img_contact.setAttribute("alt", "IMG");
		
		div_contact.setAttribute("data-tilt");
		div_contact.className = "contact1-pic js-tilt";
		
		// Form
		_form.className = "contact1-form validate-form";
		span_form.className = "contact1-form-title";		
		
		/**
		*
		* Jerarquia
		*
		**/
		_form.appendChild(span_form);		
		div_contact.appendChild(img_contact);
		
		div_container.appendChild(div_contact);
		
		
		for(let elemento of _json.questions)
		{
			var input_elemento  = null;
			var div_elemento 	= document.createElement("div");
			var span_elemento      = document.createElement("span");	
			
			if(elemento.tipo == 'input')
			{
				input_elemento = document.createElement("input");
				input_elemento.setAttribute("type","text");
			}else if(elemento.tipo == 'textarea')
			{
				input_elemento = document.createElement("textarea");
			}else
			{
				input_elemento = document.createElement("input");
				input_elemento.setAttribute("type","text");
			}
								
			div_elemento.className = "wrap-input1 validate-input";
			div_elemento.setAttribute("data-validate",elemento.mensaje_alerta);
			
			input_elemento.className = "input1";
			input.setAttribute("name",elemento.nombre);
			input.setAttribute("placeholder", elemento.nombre);
			
			span_elemento.className = "shadow-input1";
			
			div_elemento.appendChild(input_elemento);
			div_elemento.appendChild(span_elemento);
			
			_form.appendChild(div_elemento);
			
		}//for
		
		//Botones
		
		span_button.appendChild(i_button);
		button_enviar.appendChild(span_button);
		
		div_boton.appendChild(button_enviar);
		
		_form.appendChild(div_boton);
		
		div_container.appendChild(_form);
		
		div_parent.appendChild(div_container);
						
	}//evaluaciones	
	
	perfil_informacion_general(_json)
	{
		
	}
	

}//NoBorrar
