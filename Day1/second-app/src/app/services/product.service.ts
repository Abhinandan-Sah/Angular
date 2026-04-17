import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      id: 101,
      pname: 'herbal shampoo',
      price: '350.50',
      mfgDate: '12/1/2026',
      expDate: '12/1/2027',
    },
    {
      id: 102,
      pname: 'aloe vera face wash',
      price: '220.00',
      mfgDate: '1/15/2026',
      expDate: '1/15/2028',
    },
    {
      id: 103,
      pname: 'coconut hair oil',
      price: '180.75',
      mfgDate: '2/10/2026',
      expDate: '2/10/2028',
    },
    {
      id: 104,
      pname: 'green tea soap',
      price: '95.40',
      mfgDate: '3/5/2026',
      expDate: '3/5/2027',
    },
    {
      id: 105,
      pname: 'vitamin c serum',
      price: '499.99',
      mfgDate: '4/2/2026',
      expDate: '10/2/2027',
    },
    {
      id: 106,
      pname: 'moisturizing lotion',
      price: '275.25',
      mfgDate: '5/20/2026',
      expDate: '5/20/2028',
    },
    {
      id: 107,
      pname: 'charcoal scrub',
      price: '310.10',
      mfgDate: '6/18/2026',
      expDate: '6/18/2027',
    },
    {
      id: 108,
      pname: 'sunscreen spf 50',
      price: '420.00',
      mfgDate: '7/1/2026',
      expDate: '7/1/2028',
    },
  ];

  public disploayProducts(): Array<{id, pname, price, mfgDate, expDate}>{
    return this.products;
  }

  public registerProduct(product: {id:number, pname:string, price: string, mfgDate:string, expDate:string}){
    this.products.push(product);
  }
}
