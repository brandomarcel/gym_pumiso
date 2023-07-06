import { DetalleClienteComponent } from './../../gestionClientes/detalle-cliente/detalle-cliente.component';
import { PesosComponent } from './../../gestionPeso/pesos/pesos.component';
import { ListMembresiasComponent } from './../../gestionMembresias/list-membresias/list-membresias.component';
import { AddMembresiasComponent } from './../../gestionMembresias/add-membresias/add-membresias.component';
import { ListClientesComponent } from './../../gestionClientes/list-clientes/list-clientes.component';
import { AddClienteComponent } from './../../gestionClientes/add-cliente/add-cliente.component';




import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';


AddClienteComponent
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgSelectModule
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    
   
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

    ListClientesComponent,
    AddClienteComponent,
    DetalleClienteComponent,

    AddMembresiasComponent,
    ListMembresiasComponent,

    PesosComponent
  ]
})

export class AdminLayoutModule {}
