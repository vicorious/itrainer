init();

function validar()
{
	var primero = document.getElementById('tipoproceso');
	if(primero.text == '' || primero.text == undefined)
	{
		alert('paila');
	}
}
	
function init()
{
	var divfiltrado = document.getElementsByClassName("filterDiv");
	for (i = 0; i < divfiltrado.length; i++) 
	{
		divfiltrado[i].onclick = 
		function()
		{
			if(this.className.indexOf('sostenido') == -1)
			{
				this.classList.add('sostenido');
				this.style.backgroundColor = '#00994C';
			}else
			{					
				this.classList.remove('sostenido');
				this.style.backgroundColor = '#2196F3';
			}
		};
	}
	
}//init

function openCity(evt, cityName) 
{		
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) 
	{
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) 
	{
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}//openCity

function allowDrop(ev) 
{
	ev.preventDefault();
	
}//allowDrop

function drag(ev) 
{
	ev.dataTransfer.setData("text", ev.target.id);
	
}//drag
		
function drop(ev) 
{
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	
}//drop