import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from "../service/product-data.service";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  IdToDelete = "";
  productList = [];
  constructor(private router: Router, public productDataService: ProductDataService, private http:HttpClient) { }



  ngOnInit(): void {
    localStorage.clear();
    this.productDataService.getProducts().subscribe((data) =>{
      this.productList = data;
    })
  }


  DeleteProd(IdToDelete){
    this.productDataService.removeProduct(IdToDelete).subscribe((data) =>{
      this.productList = data;
    })
  }


  IdToUpdate(IdToUpdate){
    localStorage.setItem('currentID' , IdToUpdate);
    this.router.navigateByUrl('updateProduct');

  }

}
