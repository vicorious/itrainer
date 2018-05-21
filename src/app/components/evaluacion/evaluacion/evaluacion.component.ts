import { Component, OnInit } from '@angular/core';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-evaluacion',
  providers: [EnrutamientoService],
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit 
{

  constructor(private _enrutamiento: EnrutamientoService, private ngProgress: NgProgress) { }

  /**
  *
  *
  *
  *
  **/
  ngOnInit() 
  {
	  
  }//ngOnInit
  
  /**
  *
  *
  *
  *
  *
  **/
  evaluacion2()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.evaluacion2();
	  this.ngProgress.done();	  
	  
  }//evaluacion2

}//NoBorrar
