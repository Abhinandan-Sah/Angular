import { Pipe, PipeTransform } from '@angular/core';

type OrderStatusCode = 'P' | 'S' | 'D' | 'C';

@Pipe({
  name: 'orderStatus',
  standalone: true
})
export class OrderStatusPipe implements PipeTransform {
  transform(status: OrderStatusCode): string {
    switch (status) {
      case 'P':
        return 'Pending';
      case 'S':
        return 'Shipped';
      case 'D':
        return 'Delivered';
      case 'C':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  }
}
