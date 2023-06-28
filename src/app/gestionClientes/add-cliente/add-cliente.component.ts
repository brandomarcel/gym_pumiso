import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatDate } from "@angular/common";
import { ServiciosService } from 'app/services/servicios.service';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {
  //Cliente
  cedula: any = '';
  nombres: any = '';
  apellidos: any = '';
  apodo: any = '';
  celular: any = '';
  correo: any = '';
  //Membresia
  fecha_inicio: any = '';
  fecha_fin: any = '';
  tipo_membresia: any = 'Mensual';
  valor: any = '25';
  //Peso y altura
  peso: any = '';
  altura: any = '';
  imc: any = '';
  descripcion: any = '';
  bajarpeso: any = '';


  constructor(private servicios:ServiciosService) { }

  ngOnInit(): void {
  let fecha = new Date();
  this.fecha_inicio = formatDate((fecha), 'yyyy-MM-dd', 'en-US');
  console.log(this.fecha_inicio)

  fecha.setMonth(fecha.getMonth() + 1)
  this.fecha_fin = formatDate(fecha, 'yyyy-MM-dd', 'en-US');
  


  }

  createCliente() {

   
    let cliente = {
      'cedula': this.cedula, 'nombres': this.nombres, 'apellidos': this.apellidos,
      'apodo': this.apodo, 'celular': this.celular, 'correo': this.correo,'fecha_inicio': this.fecha_inicio,
      'fecha_fin': this.fecha_fin, 'tipo_membresia': this.tipo_membresia, 'valor': this.valor,
      'peso': this.peso, 'altura': this.altura
    }

    this.servicios.crearCliente(cliente).subscribe((res:any)=>{
      console.log(res)
      if (res.message.estado == 'Exito') {
        this.servicios.sweetMensaje('CLIENTE REGISTRADO');
        
      }
      
    })

    

    console.log(cliente)

  }
  calcularIMC(){
  let res:any;
    if (!this.peso ) {
      this.servicios.sweetMensaje('Ingrese el peso ');
    }else if(!this.altura){
      this.servicios.sweetMensaje('Ingrese la altura ');
    }
    res =this.servicios.calcularIMC(this.peso,this.altura);

    this.imc=res.imc
    this.descripcion = res.descripcion
    this.bajarpeso = res.bajarpeso
    console.log(res);
    


  }

  cambio(){
    console.log(this.tipo_membresia)
    if (this.tipo_membresia == 'Mensual') {
      this.valor=25;
    }else if (this.tipo_membresia == 'Trimestral') {
      this.valor=75;
    }else if (this.tipo_membresia == 'Semestral') {
      this.valor=150;
    }else if (this.tipo_membresia == 'Anual') {
      this.valor=300;
    }else if (this.tipo_membresia == 'Otro') {
      this.valor='';
    }
  }

}
