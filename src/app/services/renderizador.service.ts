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
	* Valoraciones por tipo
	*
	**/
	trainers(_json):
	{
		_json.forEach(elemento =>
		{
			/**
			*
			*
			* Construccion
			*
			*
			**/
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
			
			/**
			*
			*
			* Asinaciones Clases
			*
			*
			**/
			
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
			
			/**
			*
			*
			* Iteraciones
			*
			*
			**/
			
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
			
			/**
			*
			*
			* Unir padres
			*
			*
			**/
			
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
			
		});//jsonEach
		
	}//trainers

}//NoBorrar
