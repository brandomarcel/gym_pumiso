import { ServiciosService } from 'app/services/servicios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss']
})
export class DetalleClienteComponent implements OnInit {

  name: any = "";
  detalleCliente: any = "";
  listMembresia: any = [];
  listPesos: any = [];
  constructor(private servicios: ServiciosService, private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.params['name']
    console.log(this.name)

  }

  ngOnInit(): void {

    this.getAlldetalleClientes(this.name)

  }


  getAlldetalleClientes(name) {

    this.servicios.getAlldetalleClientes(name).subscribe((res: any) => {
      this.detalleCliente = res.message

      this.listMembresia = this.detalleCliente.membresia
      this.listPesos = this.detalleCliente.pesos

      this.getMembresias()
      console.log(this.detalleCliente)
      console.log(this.listMembresia)

    })
  }

  getMembresias() {



      /* const variableOne:any = this.listaMembresias.filter(item => (item.estado === 1)); */

      this.listMembresia.forEach(element => {
        const fechaFinalizacion = new Date(element.fecha_fin)
        const fecha = new Date();
       
        const diferenciaDias = Math.ceil((fecha.getTime() - fechaFinalizacion.getTime()) / (1000 * 60 * 60 * 24));
        console.log(diferenciaDias)

        const diferenciaTiempos = fechaFinalizacion.getTime() - fecha.getTime();
        const diferenciaDiass = Math.ceil(diferenciaTiempos / (1000 * 60 * 60 * 24));

        console.log(`Faltan  ${element.fecha_fin } ${diferenciaDiass} días para que se cumpla la fecha de finalización.`);

        if ((diferenciaDiass <= 5) && (diferenciaDiass > 0)) {
          console.log('diferenciaDias');
          const mensaje = `${diferenciaDiass} día(s) restante(s)`;
          element.membresia = mensaje
          element.style = ' color: black;background-color: yellow;border-radius: 10px;text-align: center'
          // Mostrar el mensaje en la página o en la consola
          console.log(mensaje);
        }else if ((diferenciaDiass <= 0)) {
          console.log('diferenciaDias');
          element.membresia = 'TERMINADA'
          element.style = ' color: white;background-color: red;border-radius: 10px;text-align: center'

          const mensaje = `SE HA TERMINADO LA MEMBRESIA ${element.fecha_fin } ${diferenciaDiass} días.`;
          // Mostrar el mensaje en la página o en la consola
          console.log(mensaje);
        } else {


          element.membresia = 'ACTIVA'
          element.style = 'color: black;background-color: rgb(14, 209, 14);border-radius: 10px;text-align: center'
        } 

      });


  }


  async deleteMembresia(name){

    const res = await this.servicios.sweetMensajePromesa('Esta seguro de borrar la membresia.','warning');
console.log(res)
if (res == 'ok') {
  this.servicios.deleteMembresia(name).subscribe(res=>{
      console.log(res)
      this.getAlldetalleClientes(this.name)

      this.servicios.sweetMensaje('success','Membresia eliminada')
    })
  
}
    
  }

  async deletePeso(name){

    const res = await this.servicios.sweetMensajePromesa('Esta seguro de borrar el peso.','warning');
console.log(res)
if (res == 'ok') {
  this.servicios.deletePeso(name).subscribe(res=>{
      console.log(res)
      this.getAlldetalleClientes(this.name)

      this.servicios.sweetMensaje('success','Peso eliminado')
    })
  
}
    
  }


}
