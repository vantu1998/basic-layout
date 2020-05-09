import { Injectable } from '@angular/core';
import { Product } from './model/product.model'
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [{
    "id": 1,
    "name": "Onions - Red",
    "price": 26488,
    "status": false
  }, {
    "id": 2,
    "name": "Pail - 4l White, With Handle",
    "price": 770640,
    "status": false
  }, {
    "id": 3,
    "name": "Orange Roughy 4/6 Oz",
    "price": 575574,
    "status": false
  }, {
    "id": 4,
    "name": "Tomatoes - Yellow Hot House",
    "price": 217456,
    "status": false
  }, {
    "id": 5,
    "name": "Turnip - Wax",
    "price": 216075,
    "status": false
  }, {
    "id": 6,
    "name": "Beef - Top Sirloin",
    "price": 418478,
    "status": false
  }, {
    "id": 7,
    "name": "Soup - Cream Of Broccoli",
    "price": 28802,
    "status": false
  }, {
    "id": 8,
    "name": "Sauce - Mint",
    "price": 458808,
    "status": true
  }, {
    "id": 9,
    "name": "Wine - Red, Mouton Cadet",
    "price": 199069,
    "status": true
  }, {
    "id": 10,
    "name": "Fish - Halibut, Cold Smoked",
    "price": 64913,
    "status": true
  }, {
    "id": 11,
    "name": "Foie Gras",
    "price": 704358,
    "status": false
  }, {
    "id": 12,
    "name": "Shiro Miso",
    "price": 775640,
    "status": false
  }, {
    "id": 13,
    "name": "Turkey - Ground. Lean",
    "price": 66297,
    "status": false
  }, {
    "id": 14,
    "name": "Tomatoes - Plum, Canned",
    "price": 582451,
    "status": true
  }, {
    "id": 15,
    "name": "Icecream Cone - Areo Chocolate",
    "price": 245599,
    "status": true
  }, {
    "id": 16,
    "name": "Ice Cream Bar - Oreo Cone",
    "price": 752033,
    "status": false
  }, {
    "id": 17,
    "name": "Chocolate - Semi Sweet, Calets",
    "price": 931722,
    "status": false
  }, {
    "id": 18,
    "name": "Magnotta - Bel Paese White",
    "price": 331172,
    "status": false
  }, {
    "id": 19,
    "name": "Towels - Paper / Kraft",
    "price": 821128,
    "status": true
  }, {
    "id": 20,
    "name": "Chef Hat 25cm",
    "price": 405392,
    "status": true
  }, {
    "id": 21,
    "name": "Muffin - Blueberry Individual",
    "price": 381488,
    "status": true
  }, {
    "id": 22,
    "name": "Hinge W Undercut",
    "price": 887428,
    "status": true
  }, {
    "id": 23,
    "name": "Mustard - Pommery",
    "price": 223349,
    "status": true
  }, {
    "id": 24,
    "name": "Spaghetti Squash",
    "price": 581100,
    "status": false
  }, {
    "id": 25,
    "name": "Appetizer - Escargot Puff",
    "price": 947749,
    "status": true
  }, {
    "id": 26,
    "name": "Mix - Cocktail Strawberry Daiquiri",
    "price": 483480,
    "status": true
  }, {
    "id": 27,
    "name": "Breakfast Quesadillas",
    "price": 831436,
    "status": false
  }, {
    "id": 28,
    "name": "Yams",
    "price": 424738,
    "status": true
  }, {
    "id": 29,
    "name": "Beans - Soya Bean",
    "price": 133315,
    "status": true
  }, {
    "id": 30,
    "name": "Muffin Hinge 117n",
    "price": 608832,
    "status": false
  }]

  constructor() {
   }
  getAllProducts(name?: string, price?: number): Product[]{
    let result = this.products;
    if(name){
      for(let i = 0; i< this.products.length;i++){
        if(this.products[i].name.toLowerCase().indexOf(name.toLowerCase()) != -1){
          result = [];
          result.push(this.products[i]);
        }
      }
    }
    if(price){
      for(let i = 0; i< this.products.length;i++){
        if(this.products[i].price === price){
          result = [];
          result.push(this.products[i]);
        }
      }
    }
    return result;
  }
  getProductById(id: number): Product{
    let result: Product;
    result = _.find(this.products,{id: id });
    return result;
  }
}
