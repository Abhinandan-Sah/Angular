import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Home | Online Order Tracking System'
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.component').then((m) => m.OrdersComponent),
    title: 'Orders | Online Order Tracking System'
  },
  { path: '**', redirectTo: 'home' }
];
