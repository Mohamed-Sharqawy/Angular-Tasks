import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-component',
  imports: [Products,FormsModule,CommonModule],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  FilterByNameInParent:string="";
  productsInCart:Iproduct[]=[];

  constructor(private router: Router) {}

  ParetnAddtoCart(prod:Iproduct){
    
    let existingProduct=this.productsInCart.find(p => p.id === prod.id);
    if(existingProduct){
      existingProduct.productQuantity += 1;
    } else {
      this.productsInCart.push({...prod, productQuantity: 1});
    }
  }

  decreaseQuantity(prod:Iproduct){
    let existingProduct=this.productsInCart.find(p => p.id === prod.id);
    if(existingProduct ){
      if(existingProduct.productQuantity <= 1){
        this.productsInCart = this.productsInCart.filter(p => p.id !== prod.id);
      }else{
        existingProduct.productQuantity -=1;
      }
    }
  }

  increaseQuantity(prod:Iproduct){
    let existingProduct = this.productsInCart.find(p => p.id === prod.id);
    if(existingProduct){
      existingProduct.productQuantity += 1;
    }
  }

  goToProductDetails(productId:number):void {
    
    this.router.navigate(['/products', productId]).then(() =>{
      console.log('Navigation to product details successful');
    }).catch(err => {
      console.error('Navigation to product details failed', err);
    });
  }
}
