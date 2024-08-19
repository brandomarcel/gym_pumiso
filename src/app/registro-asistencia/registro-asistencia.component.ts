import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ServiciosService } from 'app/services/servicios.service';





@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.component.html',
  styleUrls: ['./registro-asistencia.component.scss']
})
export class RegistroAsistenciaComponent implements OnInit {


  
  title = 'qr-reader';
  public cameras:MediaDeviceInfo[]=[];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled:any=false;
  public results:string[]=[];
  sendingData:any;

  user:any='';
  membresia:any='';
  estado:any='';
  style:any='';

  constructor(private servicios:ServiciosService) { }

  ngOnInit(): void {

    
  }



  camerasFoundHandler(cameras: MediaDeviceInfo[]){
    this.cameras=cameras;
    this.selectCamera(this.cameras[0].label);
  }

  scanSuccessHandler(event:string){
    console.log("escanenando")    
    this.results.push('sdfsdfsdfd');
   
    
    if (!this.sendingData) {
     
      console.log("entro a escaner")    
      this.sendingData = true;
      this.sendService(event);
      this.results.push(event);
    console.log(event);
    
  }
   /*  this.sendService(event);
    this.results.unshift(event); */
  }

  async selectCamera(cameraLabel: string){    
    await this.cameras.forEach(camera=>{
      if(camera.label.includes(cameraLabel)){
        this.myDevice=camera;
        console.log(camera.label);
        this.scannerEnabled=true;
      }
    })    
  }

  verificarMembresia(fecha_fin){

  
      const fechaFinalizacion = new Date(fecha_fin)
      const fecha = new Date();

      const diferenciaTiempos = fechaFinalizacion.getTime() - fecha.getTime();

      console.error('diferenciaTiempos',diferenciaTiempos)
      const diferenciaDiass = Math.ceil(diferenciaTiempos / (1000 * 60 * 60 * 24));

      console.log(`Faltan  ${fecha_fin } ${diferenciaDiass} días para que se cumpla la fecha de finalización.`);

  if ((diferenciaDiass <= 10) && (diferenciaDiass >= 1)) {
     
        const mensaje = ` TE RESTAN ${diferenciaDiass} DIAS DE ACCESO`;
        this.membresia = mensaje

        this.servicios.voz('TE RESTAN '+diferenciaDiass +' DIAS DE ACCESO')
        this.estado = 'PROXIMO'
        this.style = 'message warning'
        // Mostrar el mensaje en la página o en la consola
        console.log(mensaje);
      }else if ((diferenciaDiass <= -1)) {
       
        this.membresia = 'TU MEMBRESIA HA TERMINADO'
        this.servicios.voz(this.membresia)
        this.estado = 'TERMINADA'
        this.style = 'message error'

      }else if ((diferenciaDiass == 0)) {
       
        const mensaje = `HOY ES TU ULTIMO DIA DE ACCESO`;
        this.membresia = mensaje

        this.servicios.voz(this.membresia)
        this.estado = 'PROXIMO'
        this.style = 'message warning'
        // Mostrar el mensaje en la página o en la consola
        console.log(mensaje);
        // Mostrar el mensaje en la página o en la consola
        console.log(mensaje);
      } else {


        this.membresia = 'MEMBRESIA ACTIVA'
        this.estado = 'ACTIVA'
        this.style = 'message success'
      } 

  

  }

  sendService(result: string) {

    console.log(result)
    
    this.servicios.getAsitencia(result).subscribe((response:any) => {

      this.user=response.message.user[0]
      this.servicios.voz(('BIENVENIDO'+this.user.nombres_completos))
      
      console.log(this.user);

     

      this.verificarMembresia(this.user.fecha_fin)
      setTimeout(() => {
      this.sendingData = false;

      this.user='';
     
    }, 8000); 
    });
  // espera 5 segundos antes de enviar el servicio
   
  }



}
