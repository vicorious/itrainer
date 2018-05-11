import { Component, OnInit } from '@angular/core';
import {EnrutamientoService}   from '../../../services/enrutamiento.service';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-bienvenido',
  providers: [EnrutamientoService],
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit 
{

  constructor(private _enrutamiento: EnrutamientoService, private ngProgress: NgProgress) { }

  ngOnInit() 
  {
	  
  }//ngOnInit
  
  agendar()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.agendar();
	  this.ngProgress.done();	  
	  
  }//agendar

}//NoBorrar
