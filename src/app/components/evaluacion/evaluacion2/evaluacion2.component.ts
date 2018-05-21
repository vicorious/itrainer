import { Component, OnInit } from '@angular/core';

import {EnrutamientoService}   from '../../../services/enrutamiento.service';
//Progress bar
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-evaluacion2',
  providers: [EnrutamientoService],
  templateUrl: './evaluacion2.component.html',
  styleUrls: ['./evaluacion2.component.css']
})
export class Evaluacion2Component implements OnInit 
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
  **/
  evaluacion3()
  {
	  this.ngProgress.start();  
	  this._enrutamiento.evaluacion3();
	  this.ngProgress.done();	
	  
  }//evaluacion3

}//NoBorrar
