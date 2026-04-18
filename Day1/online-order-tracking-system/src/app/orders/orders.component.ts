import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderStatusPipe } from '../order-status.pipe';

type OrderStatusCode = 'P' | 'S' | 'D' | 'C';

interface OrderItem {
  id: number;
  customer: string;
  product: string;
  price: number;
  orderedOn: Date;
  status: OrderStatusCode;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, OrderStatusPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: OrderItem[] = [
    {
      id: 1001,
      customer: 'Asha Verma',
      product: 'Wireless Keyboard',
      price: 2499,
      orderedOn: new Date('2026-04-12T10:15:00'),
      status: 'P'
    },
    {
      id: 1002,
      customer: 'Rahul Singh',
      product: 'Noise Cancelling Headphones',
      price: 8999,
      orderedOn: new Date('2026-04-10T14:30:00'),
      status: 'S'
    },
    {
      id: 1003,
      customer: 'Meera Iyer',
      product: '4K Monitor',
      price: 21999,
      orderedOn: new Date('2026-04-08T09:00:00'),
      status: 'D'
    },
    {
      id: 1004,
      customer: 'Karan Patel',
      product: 'Laptop Stand',
      price: 1499,
      orderedOn: new Date('2026-04-06T16:45:00'),
      status: 'C'
    }
  ];
}
