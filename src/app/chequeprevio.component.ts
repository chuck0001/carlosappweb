import { Component} from '@angular/core';
import 'rxjs/Rx';
import {Pipe, PipeTransform} from '@angular/core';
import { AnalizaPipex } from './analizapipex.pipe';
import { ConectorAService } from './ConectorA.Services';


@Component({
  moduleId: module.id,
  selector: 'dialogo-chequeprevio',
  templateUrl: 'Selecciona.Perfil.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/site.css'],
  pipes:[AnalizaPipex]
  
})

export class ChequeprevioComponent  {
 
 public otro;

    constructor(private servicio: ConectorAService ) {


    this.otro= servicio.getCheque();

    }
}

