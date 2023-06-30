import { ServiciosService } from 'app/services/servicios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-membresias',
  templateUrl: './list-membresias.component.html',
  styleUrls: ['./list-membresias.component.scss']
})
export class ListMembresiasComponent implements OnInit {
  listaMembresias:Array<any>=[]
  mostrarMemb:boolean=false


  constructor(private servicios:ServiciosService) { }

  ngOnInit(): void {
    this.getMembresias();
  }


  getMembresias(){
  
    this.servicios.getMembresias().subscribe((res:any)=>{
      console.log(res)
      this.listaMembresias=res.message;
      const variableOne = this.listaMembresias.filter(item => (item.estado === 1));
      console.log(variableOne)
    })
  }



  addMembresia(estado:any){

    console.log(estado)
    this.mostrarMemb=estado;
    
  }

}
