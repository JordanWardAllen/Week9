import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../service/register.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';
import { Observable } from "rxjs";

const backend_url = "http://localhost:3000";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})



export class AddProductComponent implements OnInit {

  constructor(private router: Router, public registerService: RegisterService, private http:HttpClient) { }

  prodPrice = "";
  prodName = "";
  prodQuant = 0;
  prodDesc = "";
  product = {};



  ngOnInit(): void {
  }


  public test(){
    this.http.post(backend_url + '/api/createProduct', httpOptions)
    // console.log(data)
  }
  public createProd(prodName, prodPrice, prodQuant, prodDesc){
    // console.log('product creation.')
    let product = { prodName: this.prodName, prodPrice: this.prodPrice, prodQuant : this.prodQuant, prodDesc: this.prodDesc};
    this.http.post(backend_url + '/api/add', product, httpOptions).subscribe((data: any) => {
      console.log(data)

      if (data.valid){  
      alert("valid");
      this.router.navigateByUrl('');
        // sessionStorage.setItem('email', data.email);
        // sessionStorage.setItem('pwd', data.pwd);
        // sessionStorage.setItem('age', data.age);
        // sessionStorage.setItem('birthdate', data.birthdate);
        // sessionStorage.setItem('username', data.username);   
        // this.router.navigateByUrl('/account');
      } else {
        alert("Invalid");
        
      }
      })
    }
  }

