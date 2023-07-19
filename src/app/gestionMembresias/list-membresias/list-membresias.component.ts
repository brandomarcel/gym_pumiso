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
  mostrarMemb: boolean = false
  fecha: any;

  constructor(private servicios: ServiciosService) { }

  ngOnInit(): void {
    this.getMembresias();

    this.fecha = new Date();
    this.fecha = formatDate((this.fecha), 'yyyy-MM-dd', 'en-US')
  }


  getMembresias() {

    this.servicios.getMembresias('todos').subscribe((res: any) => {
      console.log(res)
      this.listaMembresias = res.message;

      /* const variableOne:any = this.listaMembresias.filter(item => (item.estado === 1)); */

      this.listaMembresias.forEach(element => {
        const fechaFinalizacion = new Date(element.fecha_fin)
        const fecha = new Date();
        console.log(this.fecha)
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
