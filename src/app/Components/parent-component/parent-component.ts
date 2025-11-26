import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-component',
  imports: [Products,FormsModule,CommonModule],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  FilterByNameInParent:string="";
  productsInCart:Iproduct[]=[];

  ParetnAddtoCart(prod:Iproduct){
    
    let existingProduct=this.productsInCart.find(p => p.id === prod.id);
    if(existingProduct){
      existingProduct.productQuantity += 1;
    } else {
      this.productsInCart.push({...prod, productQuantity: 1});
    }
  }
}
