import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[];
  name: string;
  price: number;
  constructor(public productService: ProductService,
    public routerService: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      let name = data.name;
      let price = parseInt(data.price);
      this.products = this.productService.getAllProducts(name,price);
    })
    
  }
  
  search() {
    this.routerService.navigate(['/products'], { queryParams: { name: this.name ? this.name : '', price: this.price ? this.price : '' } });
  }
}
