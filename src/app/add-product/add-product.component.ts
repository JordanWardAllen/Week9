import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from "../service/product-data.service";



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})



export class AddProductComponent implements OnInit {

  constructor(private router: Router, public productDataService: ProductDataService, private http:HttpClient) { }

  prodPrice = 0;
  prodName = "";
  prodQuant = 0;
  prodDesc = "";
  newProduct = {};



  ngOnInit(): void {
  }


  createProd(prodName, prodPrice, prodQuant, prodDesc){
    // console.log('product creation.')
    let newProduct = { id: "ExampleID", name: this.prodName, price: this.prodPrice, quantity : this.prodQuant, description: this.prodDesc};
    this.productDataService.addProduct(newProduct).subscribe((data: any) => {
      console.log(data)
      this.router.navigateByUrl('');

      })
    }
  }

