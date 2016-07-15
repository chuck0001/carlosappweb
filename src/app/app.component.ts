import { Component,OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Pipe, PipeTransform} from '@angular/core';
import { AnalizaPipex } from './analizapipex.pipe';
import { ConectorAService } from './ConectorA.Services';
import { ChequeprevioComponent } from './chequeprevio.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'ListadoDeCortes.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/site.css'],
  pipes:[AnalizaPipex],
  providers:[ConectorAService],
  directives:[ChequeprevioComponent]
  //styleUrls: ['app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app worksssss!';
  private values: string[];

 public objetos: Object[];
 public ListaCortes;
 private alguienObj: string;
 private alguiOtro: string;



    constructor(private http: Http, private servicio: ConectorAService ) {


    //this.ListaCortes= servicio.getCortes();

    }



      ngOnInit() {

this.http.get("http://localhost:63944/api/cortes")
            .map((res: Response) => <Object[]>res.json())
            .subscribe((data: Object[]) => { 
              console.log("regreso de cortes", data);
              this.ListaCortes = data;
             
            });


    }

    funcionPrint(){

      console.log("impresion");


    }

    DialogoPrevioCheque(){

      


    }

}






