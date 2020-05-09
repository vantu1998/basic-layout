import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../model/product.model";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  constructor(public productService: ProductService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.abc();
  }
  abc(){
     this.activatedRoute.params.subscribe((result) => {
      let id = parseInt(result.id);
      
      this.product = this.productService.getProductById(id);
      
    })

    
  }
}
