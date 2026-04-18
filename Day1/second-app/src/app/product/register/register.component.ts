import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  product = {id: null, pname:'', price: '', mfgDate: '', expDate: ''}
  constructor(private objSrv: ProductService){

  }

  regProduct(){
    this.objSrv.registerProduct(this.product);
    alert('Product Added in Product List !!!');
    this.product = {id: null, pname:'', price: '', mfgDate: '', expDate: ''}
  }
}
