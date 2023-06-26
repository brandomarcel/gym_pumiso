import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
apiUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  token = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  getClientes(){
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.clientes.clientes.getClientes'
 
    return this.httpClient.get( url, { headers: this.token,responseType: 'json' });
  }

}
