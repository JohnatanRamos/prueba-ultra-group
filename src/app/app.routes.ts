import { Routes } from '@angular/router';
import { AdministrationComponent } from './modules/administration/administration.component';
import { ReserveComponent } from './modules/reserve/reserve.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'administracion',
    pathMatch: 'full'
  },
  {
    path: 'reservar',
    component: ReserveComponent,
  },
  {
    path: 'administracion',
    component: AdministrationComponent,
  }
];
