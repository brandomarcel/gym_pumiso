import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Principal',  icon: 'dashboard', class: '' },
/*     { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' }, */
    
    { path: '/list-clientes', title: 'Clientes',  icon:'person', class: '' },
    { path: '/add-cliente', title: 'Crear cliente',  icon:'person_add', class: '' },
    { path: '/list-membresias', title: ' Membresias ',  icon:'card_membership', class: '' },
    { path: '/add-membresias', title: 'Agregar Membresia',  icon:'add_to_photos', class: '' },

    { path: '/pesos', title: 'Somatometria',  icon:'accessibility', class: '' },

    /* { path: '/asistencia', title: 'Asistencia',  icon:'personal_video', class: '' }, */
    


/*     { path: '/table-list', title: 'Clientes List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' }, */
   /*  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' }, */
   /*  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' }, */
   /*  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }, */
  /*   { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' }, */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
