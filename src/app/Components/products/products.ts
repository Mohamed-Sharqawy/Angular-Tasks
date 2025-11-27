import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardStyle } from "../../Directives/card-style";
import { CrediCardNumberFormatterPipe } from '../../Pipes/credi-card-number-formatter-pipe';
import { Prodcutservice } from '../../Service/prodcutservice';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, CardStyle, CrediCardNumberFormatterPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{

  productsList:Iproduct[]=[];
  totalPrice:number=0;
  username:string="ali";
  date:Date=new Date();
  creditCardNumber:string="1234567812345678";
  productFound:Iproduct[]=[];
  private searchKeyword:string="";

  constructor(private productService: Prodcutservice) {
  }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() : void{
    this.productService.getAllProds().subscribe({
      next: (products)=>{
        this.productsList = products;
        this.productFound = this.productsList;
        console.log('Products loaded successfully', products);
      },
      error: (err) => {
        console.error('Error loading products', err);
        alert('Failed to load products. Please Check Your Code.');
      }
    })
  }

  buyProduct(prod:Iproduct){
    if(prod.productQuantity > 0){
      prod.productQuantity--;
      this.totalPrice += prod.productPrice;

      if(prod.productQuantity === 0){
        alert("Product is out of stock!");
    }
  }
}

  @Input() set GetByNameinChild(value:string){
    this.searchKeyword = value;
    this.SearchMechanism(value);
  }

  SearchMechanism(keyWord : string): void{
    if(this.searchKeyword.trim() === ''){
      this.productFound = this.productsList;
      return;
    }

    const searchKeywordLower = this.searchKeyword.toLowerCase();
    this.productFound = this.productsList.filter(prod =>
      prod.productName.toLowerCase().includes(searchKeywordLower)
    );
  }

  addtocart(quantity:string, price:number){
  this.totalPrice += +quantity * price;
  }

  @Output() productEvent:EventEmitter<Iproduct>=new EventEmitter<Iproduct>();

  ChildAddtoCart(prod:Iproduct, quantity:string, price:number){
    this.productEvent.emit(prod);
    this.totalPrice += +quantity * price;
  }
  //set, get Accessor
  // set GetByName(value:string){
  //   this.productFound = this.searchProduct(value);
  // }

  searchProduct(Word:string):Iproduct[]{
    Word=Word.toLowerCase();
    return this.productsList.filter(prod=> prod.productName.toLowerCase().includes(Word));
  }
}
