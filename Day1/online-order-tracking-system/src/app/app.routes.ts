import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'orders' },
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.component').then((m) => m.OrdersComponent),
    title: 'Orders | Online Order Tracking System'
  },
  { path: '**', redirectTo: 'orders' }
];
