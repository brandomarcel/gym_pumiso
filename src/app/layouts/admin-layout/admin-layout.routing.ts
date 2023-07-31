import { RegistroAsistenciaComponent } from './../../registro-asistencia/registro-asistencia.component';

import { DetalleClienteComponent } from './../../gestionClientes/detalle-cliente/detalle-cliente.component';
import { PesosComponent } from './../../gestionPeso/pesos/pesos.component';
import { AddMembresiasComponent } from './../../gestionMembresias/add-membresias/add-membresias.component';
import { ListMembresiasComponent } from './../../gestionMembresias/list-membresias/list-membresias.component';

import { ListClientesComponent } from './../../gestionClientes/list-clientes/list-clientes.component';
import { AddClienteComponent } from './../../gestionClientes/add-cliente/add-cliente.component';

import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';





export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'list-clientes',     component: ListClientesComponent },
    { path: 'list-clientes/add-cliente',     component: AddClienteComponent },
    { path: 'add-cliente',     component: AddClienteComponent },
    { path: 'list-clientes/edit-cliente/:name',     component: AddClienteComponent },
    { path: 'list-clientes/detalle-cliente/:name',     component: DetalleClienteComponent },
    
    
    { path: 'list-membresias',     component:  ListMembresiasComponent},
    { path: 'add-membresias',     component:  AddMembresiasComponent},
    { path: 'list-membresias/add-membresias',     component: AddMembresiasComponent },
    { path: 'list-membresias/edit-membresias/:id',     component: AddMembresiasComponent },

    { path: 'pesos',     component: PesosComponent },
    { path: 'asistencia',     component: RegistroAsistenciaComponent },
    
    
    
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
/*     { path: 'icons',          component: IconsComponent }, */
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
