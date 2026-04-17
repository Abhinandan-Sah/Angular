import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products = [
  { id: 110, ProductName: 'Mobile', Price: 142000, MfgDate: new Date('2025-01-10'), ExpDate: new Date('2027-01-10') },
  { id: 121, ProductName: 'Camera', Price: 50000, MfgDate: new Date('2025-02-15'), ExpDate: new Date('2027-02-15') },
  { id: 101, ProductName: 'Earphone', Price: 3000, MfgDate: new Date('2025-03-20'), ExpDate: new Date('2027-03-20') },
];
}
