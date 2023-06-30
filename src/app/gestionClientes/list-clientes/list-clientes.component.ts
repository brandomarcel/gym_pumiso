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


  borrarCliente(name){
    this.servicios.borrarCliente(name).subscribe(res=>{
      console.log(res)
      this.getClientes();
    })
  }


  getClientes(){
  
    this.servicios.getClientes().subscribe((res:any)=>{
      console.log(res)
      this.listaClientes=res.message;
    })
  }

}
