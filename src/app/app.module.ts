import { RegistroAsistenciaComponent } from './registro-asistencia/registro-asistencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ZXingScannerModule } from '@zxing/ngx-scanner';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgSelectModule,
    ZXingScannerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RegistroAsistenciaComponent,
  

    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
