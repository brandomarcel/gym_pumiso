import { Router } from '@angular/router';
import { ServiciosService } from 'app/services/servicios.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-membresias',
  templateUrl: './add-membresias.component.html',
  styleUrls: ['./add-membresias.component.scss']
})
export class AddMembresiasComponent implements OnInit {
  //Membresia
  fecha_inicio: any = '';
  fecha_fin: any = '';
  tipo_membresia: any = 'Mensual';
  valor: any = '25';

  fecha_registro: any = '';
  listaClientes:Array<any>=[];
  cliente: any;
  constructor(private servicios:ServiciosService, private router:Router) { }

  ngOnInit(): void {
    this.fecha_registro = new Date();
    this.getClientes();
  }

  getClientes(){
    this.fecha_inicio = formatDate((this.fecha_registro), 'yyyy-MM-dd', 'en-US');
  console.log(this.fecha_inicio)

  this.fecha_registro.setMonth(this.fecha_registro.getMonth() + 1)
  this.fecha_fin = formatDate(this.fecha_registro, 'yyyy-MM-dd', 'en-US');
    this.servicios.getClientes().subscribe((res:any)=>{
      console.log(res)
      this.listaClientes=res.message;
    })
  }


  guardar() {
    console.log(this.cliente)
    var validacion = this.validar();
    console.log(validacion)
       if (validacion == true) {
        let cliente = {
          'cliente': this.cliente,'fecha_inicio': this.fecha_inicio,
          'fecha_fin': this.fecha_fin, 'tipo_membresia': this.tipo_membresia,
          'valor': this.valor,
        }
    
        this.servicios.crearMembresia(cliente).subscribe((res:any)=>{
          console.log(res)
          if (res.message.estado == 'Exito') {
            this.servicios.sweetMensaje('success','MEMBRESIA REGISTRADA');
            this.router.navigate(['/list-membresias']);
            
          }
          
        })
    
        
    
        console.log(cliente)
    
       }else{
        this.servicios.sweetMensaje('warning','Llene todos los datos ');
      }
        
      }


      validar(){
        if (!this.cliente || !this.fecha_inicio || !this.fecha_fin
          || !this.tipo_membresia || !this.valor) {
            return false;
        }else{
          return true
        }
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
