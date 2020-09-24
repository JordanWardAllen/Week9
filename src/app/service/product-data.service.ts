import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})


export class ProductDataService {

  constructor(private http: HttpClient) { }
  

  addProduct(product: Product){
    return this.http.post<any>("http://localhost:3000/api/add", product);
  }

  getProducts(){
    return this.http.get<any>("http://localhost:3000/api/read");
  }

  updateProduct(product: Product){
    return this.http.post<any>("http://localhost:3000/api/update", product);
  }

  removeProduct(IdToDelete){
    return this.http.post<any>("http://localhost:3000/api/remove", {"id" : IdToDelete});
  }
}
