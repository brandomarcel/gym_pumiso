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
    this.servicios.getClientes().subscribe((res:any)=>{
      console.log(res)
      this.listaClientes=res.message;
    })
  }

}
