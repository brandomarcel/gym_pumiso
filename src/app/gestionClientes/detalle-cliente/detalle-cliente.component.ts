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
      console.log(this.detalleCliente)
      console.log(this.listMembresia)

    })
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
