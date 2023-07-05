import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'app/services/servicios.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit {
listaClientes:Array<any>=[]
  constructor(private servicios:ServiciosService) { }

  ngOnInit(): void {
    this.getClientes();

  }


  async estadoCliente(name){

    const res = await this.servicios.sweetMensajePromesa('Esta seguro de borrar toda la informacion del cliente?','warning');
console.log(res)
if (res == 'ok') {
  this.servicios.borrarCliente(name).subscribe(res=>{
      console.log(res)
      this.getClientes();

      this.servicios.sweetMensaje('success','Cliente eliminado')
    })
  
}
    
  }


  getClientes(){
  
    this.servicios.getClientes().subscribe((res:any)=>{
      console.log(res)
      this.listaClientes=res.message;

      const cliActivos= this.listaClientes.filter((item=> (item.estado === 'Activo')))
      this.listaClientes=cliActivos

    })
  }

  onClick(item:any){
    console.log(item)

  }

}
