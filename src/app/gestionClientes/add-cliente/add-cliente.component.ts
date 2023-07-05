import { Component, OnInit,Input } from '@angular/core';
import { formatDate } from "@angular/common";
import { ServiciosService } from 'app/services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';


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
  correo: any = 'sincorreo@gmail.com';
  genero: any = 'Masculino';
  //Membresia
  fecha_inicio: any = '';
  fecha_fin: any = '';
  tipo_membresia: any = 'Mensual';
  valor: any = '25';
  tipo_pago: any = 'Efectivo';
  //Peso y altura
  peso: any = '';
  altura: any = '';
  imc: any = '';
  descripcion: any = '';
  sobrepeso: any = '';
  fecha_registro: any = '';

  id: any = '';
  fecha: any = '';


  constructor(private servicios:ServiciosService,private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

  /* this.servicios.voz('TU MEMBRESIA MICHU EN 3 DIAS'); */


  this.fecha_registro = new Date();
  this.id=this.activatedRoute.snapshot.params['name']
  console.log(this.activatedRoute.snapshot.params['name'])

  if (this.id) {
    this.servicios.detalleCliente(this.id).subscribe((res:any)=>{
      console.log(res)
      var datos = res.message[0];
      console.log(datos)
      this.cedula=datos.cedula;
      this.nombres=datos.nombres;
      this.apellidos=datos.apellidos;
      this.apodo=datos.apodo;
      this.correo=datos.correo;
      this.celular=datos.celular;
      this.genero=datos.genero;
     
      
    })
  }else{



  
  this.fecha_inicio = formatDate((this.fecha_registro), 'yyyy-MM-dd', 'en-US');
  this.fecha = formatDate((this.fecha_registro), 'yyyy-MM-dd', 'en-US');
  console.log(this.fecha_inicio)

  this.fecha_registro.setMonth(this.fecha_registro.getMonth() + 1)
  this.fecha_fin = formatDate(this.fecha_registro, 'yyyy-MM-dd', 'en-US');
}
  }

  createCliente() {
var validacion = this.validar();
console.log(validacion)
   if (validacion == true) {
    let cliente = {
      'cedula': this.cedula, 'nombres': this.nombres, 'apellidos': this.apellidos,
      'apodo': this.apodo, 'celular': this.celular, 'correo': this.correo,'fecha_registro': this.fecha,'genero': this.genero,
      'fecha_inicio': this.fecha_inicio,'fecha_fin': this.fecha_fin, 'tipo_membresia': this.tipo_membresia, 'valor': this.valor,
      'tipo_pago': this.tipo_pago,'peso': this.peso, 'altura': this.altura, 'fecha': this.fecha, 'imc': this.imc, 'descripcion': this.descripcion,
      'sobrepeso': this.sobrepeso
    }

    this.servicios.crearCliente(cliente).subscribe((res:any)=>{
      console.log(res)
      if (res.message.estado == 'Exito') {
          this.servicios.voz("BIENVENIDO "+this.apodo +" ");
       
        this.servicios.sweetMensaje('success','CLIENTE REGISTRADO');
        this.router.navigate(['/list-clientes']);
        
      }else{
        this.servicios.sweetMensaje('error',"La cedula:"+this.cedula +" ya se encuentra registrada! ");
      }
      
    },error =>{

   
      this.servicios.sweetMensaje('error','Error de conexión!');
  
      });

    

    console.log(cliente)

   }else{
    this.servicios.sweetMensaje('warning','Llene todos los datos ');
  }
    
  }
  updateCliente() {
    var validacion = this.validarEdit();
    console.log(validacion)
       if (validacion == true) {
        let cliente = {
          'cedula': this.cedula, 'nombres': this.nombres, 'apellidos': this.apellidos,
          'apodo': this.apodo, 'celular': this.celular, 'correo': this.correo,'name':this.id,
          'genero':this.genero
        }
        console.log(cliente)
        this.servicios.updateCliente(cliente).subscribe((res:any)=>{
          console.log(res)
          if (res.message.estado == 'Exito') {
            this.servicios.sweetMensaje('success','CLIENTE ACTUALIZADO');
            this.router.navigate(['/list-clientes']);
            
          }
          
        })
    
        
    
        console.log(cliente)
    
       }else{
        this.servicios.sweetMensaje('warning','Llene todos los datos ');
      }
        
      }

  validar(){
    if (!this.cedula || !this.nombres || !this.apellidos
      || !this.celular || !this.genero || !this.fecha_inicio || !this.fecha_fin
      || !this.tipo_membresia || !this.valor) {
        return false;
    }else{
      return true
    }
  }

  validarEdit(){
    if (!this.nombres || !this.apellidos 
      || !this.celular  || !this.genero ) {
        return false;
    }else{
      return true
    }
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
