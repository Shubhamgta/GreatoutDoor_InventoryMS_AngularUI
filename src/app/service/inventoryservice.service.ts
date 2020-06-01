import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class InventoryserviceService {

  private port:string = "8087"
  

  constructor(private http:HttpClient) {
   }

  addInventoryDetails(retailerId){
    return this.http.post("http://localhost:8087"+ "/inventories/add", retailerId);
  }

  getInventoryDetails(id) {
    return this.http.get("http://localhost:8087"+"/inventories/"+id);
  }

  getAllInventoryDetails() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    return this.http.get("http://localhost:8087" + "/inventories/all", {headers});
  }
}
