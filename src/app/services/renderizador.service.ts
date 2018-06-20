import { Injectable } from '@angular/core';

/**
*
* Encargado de renderizar el HTML
*
**/
@Injectable()
export class RenderizadorService 
{
	ELEGIR 		= 'Elegir!';
	SOCIAL 		= 'Social';
	// Constantes perfil
	SALDO  		= 'Saldo';
	PUNTOS 		= 'Tus puntos son: ';
	DINERO 		= 'Tu dinero ganado es: ';
	CALENDARIO	= 'Calendario';
	PROMEDIO	= 'Promedio';		

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
		
		div_contact.setAttribute("data-tilt",null);
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
			input_elemento.setAttribute("name",elemento.nombre);
			input_elemento.setAttribute("placeholder", elemento.nombre);
			
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
	* Evaluaciones default
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
		
		div_contact.setAttribute("data-tilt",null);
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
			input_elemento.setAttribute("name",elemento.nombre);
			input_elemento.setAttribute("placeholder", elemento.nombre);
			
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
	
	/**
	*
	*
	*
	**/
	perfil_informacion_general(_json)
	{
		//parent
		var div_parent 			   = document.getElementById("tab1");
		//Ul content
		var ul 		   			   = document.createElement("ul");
		var li_calification		   = document.createElement("li");
		var h4_calification		   = document.createElement("h4");
		var div_rate			   = document.createElement("div");
		var form_rate			   = document.createElement("form");
		
		//Stars
		var input_1_start          = document.createElement("input");
		var input_2_start		   = document.createElement("input");
		var input_3_start		   = document.createElement("input");
		var input_4_start		   = document.createElement("input");
		var input_5_start		   = document.createElement("input");
		//labels
		var label_1_start		   = document.createElement("label");
		var label_2_start		   = document.createElement("label");
		var label_3_start		   = document.createElement("label");
		var label_4_start		   = document.createElement("label");
		var label_5_start		   = document.createElement("label");
		
		var checked_input		   = parseInt(_json.checked);
		
		/**
		*
		* Asignaciones
		*
		**/
		if(checked_input == 1)
		{			
			input_1_start.setAttribute("checked","checked");
			
		}else if(checked_input == 2)
		{
			input_2_start.setAttribute("checked","checked");
			
		}else if(checked_input == 3)
		{
			input_3_start.setAttribute("checked","checked");
			
		}else if(checked_input == 4)
		{
			input_4_start.setAttribute("checked","checked");
			
		}else if(checked_input == 5)
		{
			input_5_start.setAttribute("checked","checked");
		}
		
		ul.className = "container inline-b";
		li_calification.className = "item inline-b-item";
		div_rate.className = "acidjs-rating-stars acidjs-rating-disabled";
		//Input
		input_1_start.setAttribute("disabled","disabled");
		input_1_start.setAttribute("type","radio");
		input_1_start.setAttribute("name","group-3");
		input_1_start.setAttribute("id","group-3-4");
		input_1_start.setAttribute("value","1");		
		//Label
		label_1_start.setAttribute("for","group-3-4");
		//Input
		input_2_start.setAttribute("disabled","disabled");
		input_2_start.setAttribute("type","radio");
		input_2_start.setAttribute("name","group-3");
		input_2_start.setAttribute("id","group-3-3");
		input_2_start.setAttribute("value","2");
		//Label
		label_2_start.setAttribute("for","group-3-3");
		//Input
		input_3_start.setAttribute("disabled","disabled");
		input_3_start.setAttribute("type","radio");
		input_3_start.setAttribute("name","group-3");
		input_3_start.setAttribute("id","group-3-2");
		input_3_start.setAttribute("value","3");
		//Label
		label_3_start.setAttribute("for","group-3-2");
		//Input
		input_4_start.setAttribute("disabled","disabled");
		input_4_start.setAttribute("type","radio");
		input_4_start.setAttribute("name","group-3");
		input_4_start.setAttribute("id","group-3-1");
		input_4_start.setAttribute("value","4");
		//Label
		label_4_start.setAttribute("for","group-3-1");		
		//Input
		input_5_start.setAttribute("disabled","disabled");
		input_5_start.setAttribute("type","radio");
		input_5_start.setAttribute("name","group-3");
		input_5_start.setAttribute("id","group-3-0");
		input_5_start.setAttribute("value","5");
		//Label
		label_5_start.setAttribute("for","group-3-0");	
		//JOIN Rating
		input_1_start.appendChild(label_1_start);
		input_2_start.appendChild(label_2_start);
		input_3_start.appendChild(label_3_start);
		input_4_start.appendChild(label_4_start);
		input_5_start.appendChild(label_5_start);
		
		form_rate.appendChild(input_1_start);
		form_rate.appendChild(input_2_start);
		form_rate.appendChild(input_3_start);
		form_rate.appendChild(input_4_start);
		form_rate.appendChild(input_5_start);
		
		div_rate.appendChild(form_rate);
		
		li_calification.appendChild(h4_calification);
		li_calification.appendChild(div_rate);
		
		//Informacion general
		var li_nombre 				= document.createElement("li");
		li_nombre.className 		= "item inline-b-item";
		li_nombre.innerHTML 		= _json.nombre;
		
		var li_edad					= document.createElement("li");
		li_edad.className			= "item inline-b-item";
		li_edad.innerHTML			= _json.edad;
		
		var li_experiencia			= document.createElement("li");
		li_experiencia.className	= "item inline-b-item";
		li_experiencia.innerHTML	= _json.experiencia;
		
		var li_especialidad			= document.createElement("li");
		li_especialidad.className	= "item inline-b-item";
		li_especialidad.innerHTML	= _json.especialidad;
		
		var li_facebook				= document.createElement("li");
		li_facebook.className		= "item inline-b-item";
		li_facebook.innerHTML		= _json.facebook;
		var a_face					= document.createElement("a");
		a_face.className					= "fa fa-facebook";
		var div_face				= document.createElement("div");
		div_face.setAttribute("id","ediatablefacebook");
		div_face.setAttribute("contenteditable","true");
		div_face.innerHTML = _json.facebook;
		
		li_facebook.appendChild(a_face);
		li_facebook.appendChild(div_face);
		
		var li_twitter				= document.createElement("li");
		li_twitter.className		= "item inline-b-item";
		li_twitter.innerHTML		= _json.twitter;
		var a_twitter				= document.createElement("a");
		a_twitter.className			= "fa fa-twitter";
		var div_twitter				= document.createElement("div");
		div_twitter.setAttribute("id","ediatabletwitter");
		div_twitter.setAttribute("contenteditable","true");
		div_twitter.innerHTML = _json.twitter;
		
		li_twitter.appendChild(a_twitter);
		li_twitter.appendChild(div_twitter);
		
		var li_instagram			= document.createElement("li");
		li_instagram.className		= "item inline-b-item";
		li_instagram.innerHTML		= _json.twitter;
		var a_instagram				= document.createElement("a");
		a_instagram.className		= "fa fa-instagram";
		var div_instagram			= document.createElement("div");
		div_instagram.setAttribute("id","ediatableinstagram");
		div_instagram.setAttribute("contenteditable","true");
		div_instagram.innerHTML = _json.twitter;
		
		li_instagram.appendChild(a_instagram);
		li_instagram.appendChild(div_instagram);
		
		//Join parents
		ul.appendChild(li_calification);
		ul.appendChild(li_nombre);
		ul.appendChild(li_edad);
		ul.appendChild(li_experiencia);
		ul.appendChild(li_especialidad);
		ul.appendChild(li_facebook);
		ul.appendChild(li_twitter);
		ul.appendChild(li_instagram);
		
		div_parent.appendChild(ul);						
		
	}//perfil_informacion_general
	
	/**
	*
	*
	*
	**/
	perfil_redimir_puntos(_json)
	{
		var div_parent 		= document.getElementById("tab2");
		var div_deck		= document.createElement("div");
		//Asignacion
		div_deck.className  = "card-deck";
		
		for(let elemento of _json)
		{
			var div_card 	= document.createElement("div");
			var img			= document.createElement("img");
			var div_body	= document.createElement("div");
			var h5			= document.createElement("h5");
			var p1			= document.createElement("p");
			var p2			= document.createElement("p");
			var p3			= document.createElement("p");
			var small		= document.createElement("small");
			//floating button
			var a_button	= document.createElement("a");
			var i_button	= document.createElement("i");
			// Asignar clases
			div_card.className = "card";
			img.className      = "card-img-top";
			img.setAttribute("src", elemento.foto);
			
			div_body.className = "card-body";
			h5.className	   = "card-title";
			h5.innerHTML       = elemento.nombre;
			
			p1.className	   = "card-text";
			p1.innerHTML	   = elemento.descripcion;
			p2.className	   = "card-text";
			p2.innerHTML	   = elemento.puntos;
			p3.className	   = "card-text";
			
			small.className    = "text-muted";
			small.innerHTML    = elemento.direccion;
			
			a_button.className = "floatF puntos";
			i_button.className = "fa fa-credit-card my-float";
			
			//Append
			a_button.appendChild(i_button);
			p3.appendChild(small);
			
			div_body.appendChild(h5);
			div_body.appendChild(p1);
			div_body.appendChild(p2);
			div_body.appendChild(p3);
			div_body.appendChild(a_button);
			
			div_card.appendChild(img);
			div_card.appendChild(div_body);
			
			div_deck.appendChild(div_card);
			
		}//for	

		div_parent.appendChild(div_deck);
		
	}//perfil_redimir_puntos
	
	/**
	*
	*
	*
	**/
	perfil_dinero_puntos(_json)
	{
		var div_parent     = document.getElementById("tab3");
		var h2			   = document.createElement("h2");
		var ul			   = document.createElement("ul");
		var li_info		   = document.createElement("li");
		var li_puntos	   = document.createElement("li");
		var li_info_money  = document.createElement("li");
		var li_money	   = document.createElement("li");
		
		h2.innerHTML	   		= this.SALDO;
		li_info.innerHTML  		= this.PUNTOS;
		li_info_money.innerHTML = this.DINERO;
		
		li_puntos.innerHTML     = _json.puntos;
		li_money				= _json.money;
		
		ul.appendChild(li_info);
		ul.appendChild(li_puntos);
		ul.appendChild(li_info_money);
		ul.appendChild(li_money);
		
		div_parent.appendChild(h2);
		div_parent.appendChild(ul);
		
	}//perfil_dinero_puntos
	
	/**
	*
	*
	*
	**/
	perfil_calendario(_json)
	{
		var div_parent      = document.getElementById("tab4");
		var h1_calendario   = document.createElement("h1");
		
		/**
		*
		* Asignaciones
		*
		**/
		h1_calendario.innerHTML = this.CALENDARIO;
		div_parent.appendChild(h1_calendario);
		
		//Month
		var div_month		= document.createElement("div");
		var ul_month		= document.createElement("ul");
		var li_month		= document.createElement("li");
		var br_month        = document.createElement("br");
		var span_month		= document.createElement("span");
		/**
		*
		* Asignaciones
		*
		**/
		
		div_month.className  = "month";
		span_month.setAttribute("style","font-size:18px");
		span_month.innerHTML = _json.ano;
		
		var month = document.createTextNode(_json.mes);
		
		li_month.appendChild(month);
		li_month.appendChild(span_month);
		
		ul_month.appendChild(li_month);
		
		div_month.appendChild(ul_month);
		
		//Weekdays
		var ul_weekdays		= document.createElement("ul");
		var li_monday		= document.createElement("li");
		var li_tuesday		= document.createElement("li");
		var li_wednesday	= document.createElement("li");
		var li_thursday		= document.createElement("li");
		var li_friday		= document.createElement("li");
		var li_saturday		= document.createElement("li");
		var li_sunday		= document.createElement("li");
		
		/**
		*
		* Asignaciones
		*
		**/
		
		ul_weekdays.className   = "weekdays";
		
		li_monday.innerHTML 	= "Lun";
		li_tuesday.innerHTML 	= "Mar";
		li_wednesday.innerHTML 	= "Mie";
		li_thursday.innerHTML 	= "Jue";
		li_friday.innerHTML 	= "Vie";
		li_saturday.innerHTML 	= "Sab";
		li_sunday.innerHTML 	= "Dom";
		
		ul_weekdays.appendChild(li_monday);
		ul_weekdays.appendChild(li_tuesday);
		ul_weekdays.appendChild(li_wednesday);
		ul_weekdays.appendChild(li_thursday);
		ul_weekdays.appendChild(li_friday);
		ul_weekdays.appendChild(li_saturday);
		ul_weekdays.appendChild(li_sunday);
		
		// Days
		var ul_days			= document.createElement("ul");
		ul_days.className	= "days";
		var numero_maximo   = _json.numero_maximo;
		var dia_inicio		= _json.dia_inicio;
		var date 			= new Date();
		var day 			= date.getDate()
		
		
		for(var i = 1; i < numero_maximo; i++)
		{
			var li_done = document.createElement("li");
			if(i >= dia_inicio)
			{				
				li_done.className = "myBtn";				
			}
			// es hoy
			if(i == day)
			{
				var span_active = document.createElement("span");
				span_active.className = "active";
				span_active.innerHTML = i.toString();
				li_done.appendChild(span_active);
			}
			else //No es hoy
			{
				li_done.innerHTML = i.toString();
			}
			
			ul_days.appendChild(li_done);
			
		}//for
		
		//Asiganciones Parent
		div_parent.appendChild(div_month);
		div_parent.appendChild(ul_weekdays);
		div_parent.appendChild(ul_days);
		
	}//perfil_calendario
	
	/**
	*
	*
	*
	**/
	perfil_examenes_valoraciones(_json)
	{
		var div_parent			= document.getElementById("tab5");
		var ul_parent			= document.createElement("ul");
		var li_promedio			= document.createElement("li");
		var h3_promedio			= document.createElement("h3");
		var div_promedio		= document.createElement("div");
		var form_promedio		= document.createElement("form");
		var calificacion_prom	= 0;
		/**
		*
		* Asignaciones
		*
		**/
		li_promedio.className	= "item inline-b-item";
		h3_promedio.innerHTML   = this.PROMEDIO;
		div_promedio.className  = "acidjs-rating-stars acidjs-rating-disabled";
		
		var examenes = new Array();
				
		var i = 1;		
		for(var examen of _json.examenes)
		{
			var _form    = document.createElement("form");
			var li 	= document.createElement("li");
			li.className = "item inline-b-item";
			var h3  = document.createElement("h3");
			h3.innerHTML = i + " Examen";
			var div = document.createElement("div");
			div.className = "acidjs-rating-stars acidjs-rating-disabled";
			
			var calificacion = examen.calificacion;
			calificacion_prom += calificacion;
			
			//Llenar los inputs
			for(var j = 0; j < 5; j++)
			{
				var input = document.createElement("input");
				input.setAttribute("disabled","disabled");
				input.setAttribute("type","radio");
				input.setAttribute("value", (j + 1).toString());
				input.setAttribute("id","group-3-"+j);
				if(calificacion == j + 1)
				{
					input.setAttribute("checked","checked");
				}
				var label = document.createElement("label");
				label.setAttribute("for","group-3-"+j);
				
				_form.appendChild(input);
				_form.appendChild(label);
				
			}//for							
				
			div.appendChild(_form);
			li.appendChild(h3);
			li.appendChild(div);
			
			examenes.push(li);
			
			i++;
			
		}//for
		
		var calificacion_total = calificacion_prom / (i- 1);
		
		// Promedio
		for(var k = 0; k < 5; k++)
		{
			var input = document.createElement("input");
			input.setAttribute("disabled","disabled");
			input.setAttribute("type","radio");
			input.setAttribute("value", (k + 1).toString());
			input.setAttribute("id","group-3-"+k);
			if(calificacion_total == k + 1)
			{
				input.setAttribute("checked","checked");
			}
			var label = document.createElement("label");
			label.setAttribute("for","group-3-"+k);

			form_promedio.appendChild(input);
			form_promedio.appendChild(label);
			
		}//for promedio
		
		div_promedio.appendChild(_form);
		li_promedio.appendChild(h3_promedio);
		li_promedio.appendChild(div_promedio);
		
		ul_parent.appendChild(li_promedio);
		
		for(var m = 0; m < examenes.length; m++)
		{
			var examen = examenes[m];
			ul_parent.appendChild(examen);
		}
		
		div_parent.appendChild(ul_parent);
		
	}//perfil_examenes_valoraciones
	
	/**
	*
	* Calendario
	*
	**/
	calendario(_json)
	{
		var div_parent      = document.getElementById("tab4");
		var h1_calendario   = document.createElement("h1");
		
		/**
		*
		* Asignaciones
		*
		**/
		h1_calendario.innerHTML = this.CALENDARIO;
		div_parent.appendChild(h1_calendario);
		
		//Month
		var div_month		= document.createElement("div");
		var ul_month		= document.createElement("ul");
		var li_month		= document.createElement("li");
		var br_month        = document.createElement("br");
		var span_month		= document.createElement("span");
		/**
		*
		* Asignaciones
		*
		**/
		
		div_month.className  = "month";
		span_month.setAttribute("style","font-size:18px");
		span_month.innerHTML = _json.ano;
		
		var month = document.createTextNode(_json.mes);
		
		li_month.appendChild(month);
		li_month.appendChild(span_month);
		
		ul_month.appendChild(li_month);
		
		div_month.appendChild(ul_month);
		
		//Weekdays
		var ul_weekdays		= document.createElement("ul");
		var li_monday		= document.createElement("li");
		var li_tuesday		= document.createElement("li");
		var li_wednesday	= document.createElement("li");
		var li_thursday		= document.createElement("li");
		var li_friday		= document.createElement("li");
		var li_saturday		= document.createElement("li");
		var li_sunday		= document.createElement("li");
		
		/**
		*
		* Asignaciones
		*
		**/
		
		ul_weekdays.className   = "weekdays";
		
		li_monday.innerHTML 	= "Lun";
		li_tuesday.innerHTML 	= "Mar";
		li_wednesday.innerHTML 	= "Mie";
		li_thursday.innerHTML 	= "Jue";
		li_friday.innerHTML 	= "Vie";
		li_saturday.innerHTML 	= "Sab";
		li_sunday.innerHTML 	= "Dom";
		
		ul_weekdays.appendChild(li_monday);
		ul_weekdays.appendChild(li_tuesday);
		ul_weekdays.appendChild(li_wednesday);
		ul_weekdays.appendChild(li_thursday);
		ul_weekdays.appendChild(li_friday);
		ul_weekdays.appendChild(li_saturday);
		ul_weekdays.appendChild(li_sunday);
		
		// Days
		var ul_days			= document.createElement("ul");
		ul_days.className	= "days";
		var numero_maximo   = _json.numero_maximo;
		var dia_inicio		= _json.dia_inicio;
		var date 			= new Date();
		var day 			= date.getDate()
		
		
		for(var i = 1; i < numero_maximo; i++)
		{
			var li_done = document.createElement("li");
			if(i >= dia_inicio)
			{				
				li_done.className = "myBtn";				
			}
			// es hoy
			if(i == day)
			{
				var span_active = document.createElement("span");
				span_active.className = "active";
				span_active.innerHTML = i.toString();
				li_done.appendChild(span_active);
			}
			else //No es hoy
			{
				li_done.innerHTML = i.toString();
			}
			
			ul_days.appendChild(li_done);
			
		}//for
		
		//Asiganciones Parent
		div_parent.appendChild(div_month);
		div_parent.appendChild(ul_weekdays);
		div_parent.appendChild(ul_days);
	}
	
	
	
}//NoBorrar
