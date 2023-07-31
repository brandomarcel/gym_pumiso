import { ServiciosService } from 'app/services/servicios.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-list-membresias',
  templateUrl: './list-membresias.component.html',
  styleUrls: ['./list-membresias.component.scss']
})
export class ListMembresiasComponent implements OnInit {
  listaMembresias: any = []
  listaMembresiasAux: any = []
  mostrarMemb: boolean = false
  fecha: any;
  searchText: string;

  constructor(private servicios: ServiciosService) { }

  ngOnInit(): void {
    this.getMembresias();

    this.fecha = new Date();
    this.fecha = formatDate((this.fecha), 'yyyy-MM-dd', 'en-US')
  }

  search(val){
    console.log(val)
    if (val) {
      console.log('entro val', val)
      const variableOne:any = this.listaMembresiasAux.filter(item => (item.estado === val)); 
      this.listaMembresias= variableOne;
    }else{
      this.listaMembresias = this.listaMembresiasAux
    }

 
  }


  getMembresias() {

    this.servicios.getMembresias('todos').subscribe((res: any) => {
      console.log(res)
      this.listaMembresias = res.message;

      /* const variableOne:any = this.listaMembresias.filter(item => (item.estado === 1)); */

      this.listaMembresias.forEach(element => {
        const fechaFinalizacion = new Date(element.fecha_fin)
        const fecha = new Date();

        const diferenciaTiempos = fechaFinalizacion.getTime() - fecha.getTime();

        console.error('diferenciaTiempos',diferenciaTiempos)
        const diferenciaDiass = Math.ceil(diferenciaTiempos / (1000 * 60 * 60 * 24));

        console.log(`Faltan  ${element.fecha_fin } ${diferenciaDiass} días para que se cumpla la fecha de finalización.`);

    if ((diferenciaDiass <= 5) && (diferenciaDiass >= 1)) {
       
          const mensaje = `${diferenciaDiass} día(s) restante(s)`;
          element.membresia = mensaje
          element.estado = 'PROXIMO'
          element.style = ' color: black;background-color: yellow;border-radius: 10px;text-align: center'
          // Mostrar el mensaje en la página o en la consola
          console.log(mensaje);
        }else if ((diferenciaDiass <= -1)) {
         
          element.membresia = 'TERMINADA'
          element.estado = 'TERMINADA'
          element.style = ' color: white;background-color: red;border-radius: 10px;text-align: center'

          const mensaje = `SE HA TERMINADO LA MEMBRESIA ${element.fecha_fin } ${diferenciaDiass} días.`;
          // Mostrar el mensaje en la página o en la consola
          console.log(mensaje);
        }else if ((diferenciaDiass == 0)) {
         
          const mensaje = `Hoy ultimo dia`;
          element.membresia = mensaje
          element.estado = 'PROXIMO'
          element.style = ' color: black;background-color: yellow;border-radius: 10px;text-align: center'
          // Mostrar el mensaje en la página o en la consola
          console.log(mensaje);
          // Mostrar el mensaje en la página o en la consola
          console.log(mensaje);
        } else {


          element.membresia = 'ACTIVA'
          element.estado = 'ACTIVA'
          element.style = 'color: black;background-color: rgb(14, 209, 14);border-radius: 10px;text-align: center'
        } 

      });
      console.log(this.listaMembresias)
      this.listaMembresias.sort((a, b) => b.creation - a.creation);
      console.log('sort',this.listaMembresias)
      this.listaMembresiasAux =this.listaMembresias
    })
  }



  addMembresia(estado: any) {

    console.log(estado)
    this.mostrarMemb = estado;

  }



  async deleteMembresia(name) {

    const res = await this.servicios.sweetMensajePromesa('Esta seguro de borrar la membresia.', 'warning');
    console.log(res)
    if (res == 'ok') {
      this.servicios.deleteMembresia(name).subscribe(res => {
        console.log(res)
        this.getMembresias();

        this.servicios.sweetMensaje('success', 'Membresia eliminada')
      })

    }

  }


}
