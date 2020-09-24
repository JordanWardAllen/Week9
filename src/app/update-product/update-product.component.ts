import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from "../service/product-data.service";



@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private router: Router, public productDataService: ProductDataService) { }

  prodPrice = 0;
  prodID = "";
  prodName = "";
  prodQuant  = 0;
  prodDesc = "";;
  currentProduct = {}
  IdToUpdate = "";
 



  ngOnInit(): void {
    this.IdToUpdate =  localStorage.getItem('currentID');
    // console.log(this.IdToUpdate)
    this.productDataService.getProduct(this.IdToUpdate).subscribe((data) =>{
      this.currentProduct = data;
      this.prodName = data.name
      this.prodPrice = data.price;
      this.prodQuant = data.quantity;
      this.prodDesc = data.description
      this.prodID = this.IdToUpdate
      
    })
    

  }

  UpdateProduct(prodName, prodPrice, prodQuant, prodDesc){
    let currentProduct = {id: this.prodID, name: this.prodName, price: this.prodPrice, quantity : this.prodQuant, description: this.prodDesc};
    this.productDataService.updateProduct(currentProduct).subscribe((data: any) => {
      console.log(currentProduct);
      this.router.navigateByUrl('');
    })
  }
  }

