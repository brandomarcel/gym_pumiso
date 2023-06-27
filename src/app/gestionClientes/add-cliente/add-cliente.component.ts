import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {
  
  cedula:any='';
  nombres:any='';
  apellidos:any='';
  apodo:any='';
  celular:any='';
  correo:any='';
  fecha_inicio:any='';
  fecha_fin:any='';
  valor:any='';
  descuento:any='';

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {


  }

  createCliente(){
    console.log(this.cedula)
   
  }

}
