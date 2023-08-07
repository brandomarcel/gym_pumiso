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

  sendService(result: string) {

    console.log(result)
    
    this.servicios.getAsitencia(result).subscribe((response:any) => {

      this.user=response.message.user[0]
      console.log(this.user);

      this.servicios.voz(('BIENVENIDO'+this.user.nombres_completos))
      setTimeout(() => {
      this.sendingData = false;

      this.user='';
     
    }, 7000); 
    });
  // espera 5 segundos antes de enviar el servicio
   
  }



}
