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
  public scannerEnabled=false;
  public results:string[]=[];
  sendingData:any;

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

  selectCamera(cameraLabel: string){    
    this.cameras.forEach(camera=>{
      if(camera.label.includes(cameraLabel)){
        this.myDevice=camera;
        console.log(camera.label);
        this.scannerEnabled=true;
      }
    })    
  }

  sendService(result: string) {
    
    this.servicios.getClientes().subscribe(response => {
      console.log(response);
      setTimeout(() => {
      this.sendingData = false;
    }, 5000); 
    });
  // espera 5 segundos antes de enviar el servicio
   
  }

  onScanError(error: Error) {
    console.error(error);
    // take appropriate actions
  }

}
