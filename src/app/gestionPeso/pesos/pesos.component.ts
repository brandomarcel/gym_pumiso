import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'app/services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pesos',
  templateUrl: './pesos.component.html',
  styleUrls: ['./pesos.component.scss']
})
export class PesosComponent implements OnInit {
  //Peso y altura
  peso: any = '';
  altura: any = '';
  imc: any = '';
  descripcion: any = '';
  sobrepeso: any = '';
  fecha: any = '';

  listaClientes: any = '';
  cliente: any;
  constructor(private servicios:ServiciosService,private router:Router) { }

  ngOnInit(): void {

    this.fecha = new Date();
    this.fecha = formatDate((this.fecha), 'yyyy-MM-dd', 'en-US');

    this.getClientes();
  }


  calcularIMC(){
    let res:any;
      if (!this.peso ) {
        this.servicios.sweetMensaje('warning','Ingrese el peso ');
      }else if(!this.altura){
        this.servicios.sweetMensaje('warning','Ingrese la altura ');
      }
      res =this.servicios.calcularIMC(this.peso,this.altura);
  
      this.imc=res.imc
      this.descripcion = res.descripcion
      this.sobrepeso = res.bajarpeso
      console.log(res);
      
  
  
    }

    validar(){
      if ( !this.peso
        || !this.altura || !this.imc || !this.descripcion || !this.sobrepeso) {
          return false;
      }else{
        return true
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

    guardar() {
      var validacion = this.validar();
      console.log(validacion)
         if (validacion == true) {
          let cliente = {
            'peso': this.peso, 'altura': this.altura, 'fecha': this.fecha, 'imc': this.imc, 'descripcion': this.descripcion,
            'sobrepeso': this.sobrepeso,'cliente': this.cliente
          }
          console.log(cliente)
          this.servicios.createPeso(cliente).subscribe((res:any)=>{
            console.log(res)
            if (res.message.estado == 'Exito') {
              
              this.servicios.sweetMensaje('success','PESO REGISTRADO');
              this.router.navigate(['/dashboard']);
              
            }
            
          })

         }else{
          this.servicios.sweetMensaje('warning','Llene todos los datos ');
        }
          
        }

}
