import { Component, OnInit } from '@angular/core';
import { InventoryserviceService } from 'src/app/service/inventoryservice.service';
import {RetailInventoryDto } from "./../../Model/RetailInventoryDto";

@Component({
  selector: 'app-inventorydetails',
  templateUrl: './inventorydetails.component.html',
  styleUrls: ['./inventorydetails.component.css']
})
export class InventorydetailsComponent implements OnInit {

  constructor(private service:InventoryserviceService) { }
  isValid:boolean = true
  inventoryRetail:RetailInventoryDto = null
  errMsg:string
  

  ngOnInit(): void {
  }

  retailInventroy(data:any) {
    console.log(data.form.value)

    this.inventoryRetail = new RetailInventoryDto()
    this.inventoryRetail.retailerId = data.form.retailerId
    this.inventoryRetail.productCategory = data.form.productCategory
    this.inventoryRetail.productRecieveTimeStamp = data.form.productRecieveTimeStamp
    this.inventoryRetail.productSaleTimeStamp = data.form.productSaleTimeStamp
    this.inventoryRetail.productUniqueId = data.form.productUniqueId

    //  this.serv
    // this.service.
    this.service.addInventoryDetails(this.inventoryRetail).subscribe( data => {
      console.log(data);
    }, err => this.errMsg = err)

  }

}
