import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

environment
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  apiUrl = environment.apiUrl;

  
  constructor(private httpClient: HttpClient) { }

  token = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  getClientes() {
    console.log(this.apiUrl)
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.getClientes'

    return this.httpClient.get(url, { headers: this.token, responseType: 'json' });
  }
  updateCliente(datos) {
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.updateCliente'
    let dato = { datos: datos }
    return this.httpClient.put(url, dato, { headers: this.token, responseType: 'json' });
  }

  detalleCliente(name) {
    console.log(name)
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.detalleCliente'
    let dato = { name: String(name) }
    return this.httpClient.post(url,dato,{ headers: this.token, responseType: 'json' });
  }

  getAlldetalleClientes(name) {
    console.log(name)
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.getAlldetalleClientes'
    let dato = { name: String(name) }
    return this.httpClient.post(url,dato,{ headers: this.token, responseType: 'json' });
  }

  crearCliente(datos) {
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.crearCliente'
    let dato = { datos: datos }
    return this.httpClient.post(url, dato, { headers: this.token, responseType: 'json' });
  }

  borrarCliente(name) {
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.borrarCliente'
    let dato = { name: String(name) }
    return this.httpClient.post(url, dato, { headers: this.token, responseType: 'json' });
  }
  estadoCliente(name) {
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.estadoCliente'
    let dato = { name: String(name) }
    return this.httpClient.post(url, dato, { headers: this.token, responseType: 'json' });
  }



  //MEMBRESIAS

  getMembresias(todos:any) {
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.getMembresias'
const dato={'todos':todos}
    return this.httpClient.post(url,dato, { headers: this.token, responseType: 'json' });
  }


  crearMembresia(datos) {
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.crearMembresia'
    let dato = { datos: datos }
    return this.httpClient.post(url, dato, { headers: this.token, responseType: 'json' });
  }

  deleteMembresia(name) {
    let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.deleteMembresia'
    let dato = { name: String(name) }
    return this.httpClient.post(url, dato, { headers: this.token, responseType: 'json' });
  }


 //PESOS
 createPeso(datos) {
  let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.createPeso'
  let dato = { datos: datos }
  return this.httpClient.post(url, dato, { headers: this.token, responseType: 'json' });
}

deletePeso(name) {
  let url = this.apiUrl + 'api/method/olimpusgym.clientes.doctype.cliente.cliente.deletePeso'
  let dato = { name: String(name) }
  return this.httpClient.post(url, dato, { headers: this.token, responseType: 'json' });
}

sendData(data: string): Observable<any> {
  return this.httpClient.post<any>('https://example.com/api/data', { data });
}



  calcularIMC(peso: number, altura: number): any {

    const imc = peso / (altura * altura);

    console.log(imc)
    let descripcion = '';
    let bajarpeso: any;
    let calculo: any = '';

    calculo = (25 * (altura * altura))
    console.log(calculo)
    bajarpeso = (peso - calculo).toFixed(2)

    console.log(bajarpeso)
    if (imc <= 18.5) {
      descripcion = 'Bajo peso'
    } else if ((imc > 18.5 && imc <= 24.9)) {
      descripcion = 'Adecuado'
    }
    else if ((imc >= 25 && imc <= 29.9)) {
      descripcion = 'Sobrepeso'
    } else if ((imc >= 30 && imc <= 34.9)) {
      descripcion = 'Obesidad grado 1'
    } else if ((imc >= 35 && imc <= 39.9)) {
      descripcion = 'Obesidad grado 2'
    } else if (imc >= 40) {
      descripcion = 'Obesidad grado 2(Alerta)'
    }

    return {
      'imc': imc.toFixed(2),
      'descripcion': descripcion,
      'bajarpeso': bajarpeso+'kg'
    };
  }

  sweetMensaje(icon,mensaje) {
    Swal.fire({

      icon: icon,
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  }

  async sweetMensajePromesa(titulo, icono): Promise<any> {
    return new Promise(async (resolve) => {
      Swal.fire({
        title: titulo,
        heightAuto: false,
        icon: icono,
        confirmButtonText: 'Si',
        showDenyButton: true,
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          resolve('ok')

        } else if (result.isDenied) {
        resolve('cancelar')
      }
      })
    })

  }

  voz(texto:string){
    const synth = window.speechSynthesis;
const utterThis = new SpeechSynthesisUtterance(texto);
console.log(utterThis)
utterThis.pitch = 0.5;
utterThis.rate = 0.4; // Reducir la velocidad de la voz a la mitad
utterThis.volume = 1;

console.log(utterThis)
synth.speak(utterThis);
  }










}
