import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productsList:Iproduct[]
  constructor() {
    this.productsList = [{
      id:1, 
      productName:"Laptop", 
      productPrice:1500, productQuantity:10, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"A high-performance laptop", 
      CategoryID:1
    },
    {
      id:2, 
      productName:"Smartphone", 
      productPrice:800, productQuantity:20, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"A latest model smartphone", 
      CategoryID:2},
    {
      id:3, 
      productName:"Headphones",
      productPrice:200, productQuantity:1, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"Noise-cancelling headphones", 
      CategoryID:3
    },
  {
      id:4, 
      productName:"Laptop", 
      productPrice:1500, productQuantity:10, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"A high-performance laptop", 
      CategoryID:1
    },
    {
      id:5, 
      productName:"Smartphone", 
      productPrice:800, productQuantity:0, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"A latest model smartphone", 
      CategoryID:2},
    {
      id:6, 
      productName:"Headphones",
      productPrice:200, productQuantity:15, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"Noise-cancelling headphones", 
      CategoryID:3
    },
    {
      id:7, 
      productName:"Laptop", 
      productPrice:1500, productQuantity:5, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"A high-performance laptop",
      CategoryID:1
    },
    {
      id:8, 
      productName:"Smartphone", 
      productPrice:800, productQuantity:8, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"A latest model smartphone",
      CategoryID:2},
    {
      id:9,
      productName:"Headphones",
      productPrice:200, productQuantity:12, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"Noise-cancelling headphones", 
      CategoryID:3
    },
    {
      id:10, 
      productName:"Smartwatch", 
      productPrice:300, productQuantity:7, ImageUrl:"https://m.media-amazon.com/images/I/71h3h8PipAL._AC_SX679_.jpg",
      productDetails:"A stylish smartwatch", 
      CategoryID:4
    }
  ]
  }
}
