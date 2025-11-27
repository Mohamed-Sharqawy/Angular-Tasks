import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodcutservice } from '../../Service/prodcutservice';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  product! : Iproduct; 
  productId : number = 0;
  isLoading : boolean = true;
  errorMessage : string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: Prodcutservice
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.productId = +params['id'];
      console.log('Product ID from URL: ',this.productId);
      this.loadProductDetails();
    })
  }

  loadProductDetails(): void{
    this.isLoading = true;
    this.errorMessage = '';

    this.productService.getProdById(this.productId).subscribe(
      {
        next: (prod) => {
          this.product = prod;
          this.isLoading = false;
          console.log('product Loaded ', prod);
        },
        error: (err) => {
          console.log('Error Loading Product', err);
          this.errorMessage = 'Failed to Load Product.';
          this.isLoading = false;
        }
      }
    )
  }

  goBackToProducts(): void{
    this.router.navigate(['/products']);
  }
}
