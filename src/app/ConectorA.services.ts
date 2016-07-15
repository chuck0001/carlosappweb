
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

export class  ConectorAService {

    public cortes: Object[];
    public formatos: Object[];
 private http: Http
    

   

     getCursos(): string[]{
        return ["curso1","curso2","curso3","crusoxx","del servicioXXX"];
    }


    getCheque(): Object[]{
        return [{"Fecha":"01/01/2016"},{"ImporteLetra":"tres mil doscientos sesenta pesos 16/100 (M.N)"} ,{"Beneficiario":"Compu proveeedores"},{"Importe":"$3260.16"}];
    }

    getCortes(): Object[]{
    
     this.http.get("http://localhost:63944/api/cortes")
            .map((res: Response) => <Object[]>res.json())
            .subscribe((data: Object[]) => { 
              console.log("regreso de cortes", data);
              this.cortes = data;
             
            });

        return this.cortes;
    }

    getFormatosCheque(): Object[]{
        this.http.get("http://localhost:4200/PerfilCheque.json?")
            .map((res: Response) => <Object[]>res.json())
            .subscribe((data: Object[]) => { 
              console.log("regreso de formatos", data);
              this.formatos = data;              
            });
            return this.formatos;
    }

}


