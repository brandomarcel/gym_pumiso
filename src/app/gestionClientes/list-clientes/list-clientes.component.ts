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
    this.listaClientes=[{'id_persona':"1", 'cedula_persona':"1722195755", 'nombre_persona':"Brando Marcelo",
     'apellido_persona':"Cevallos Zurita", 'fechan_presona':"1993-11-15", 'telefono':"0984086761"},
     {'id_persona':"1", 'cedula_persona':"1722195755", 'nombre_persona':"Brando Marcelo",
     'apellido_persona':"Cevallos Zurita", 'fechan_presona':"1993-11-15", 'telefono':"0984086761"},
     {'id_persona':"1", 'cedula_persona':"1722195755", 'nombre_persona':"Brando Marcelo",
     'apellido_persona':"Cevallos Zurita", 'fechan_presona':"1993-11-15", 'telefono':"0984086761"},
     {'id_persona':"1", 'cedula_persona':"1722195755", 'nombre_persona':"Brando Marcelo",
     'apellido_persona':"Cevallos Zurita", 'fechan_presona':"1993-11-15", 'telefono':"0984086761"},
     {'id_persona':"1", 'cedula_persona':"1722195755", 'nombre_persona':"Brando Marcelo",
     'apellido_persona':"Cevallos Zurita", 'fechan_presona':"1993-11-15", 'telefono':"0984086761"},
     {'id_persona':"1", 'cedula_persona':"1722195755", 'nombre_persona':"Brando Marcelo",
     'apellido_persona':"Cevallos Zurita", 'fechan_presona':"1993-11-15", 'telefono':"0984086761"},
     {'id_persona':"1", 'cedula_persona':"1722195755", 'nombre_persona':"Brando Marcelo",
     'apellido_persona':"Cevallos Zurita", 'fechan_presona':"1993-11-15", 'telefono':"0984086761"}]
     console.log(this.listaClientes)
    /* this.servicios.getClientes().subscribe((res:any)=>{
      console.log(res)
      this.listaClientes=res.message;
    }) */
  }

}
