import { Component, OnInit } from '@angular/core';
import { InventoryserviceService } from 'src/app/service/inventoryservice.service';


@Component({
  selector: 'app-inventorydetailslist-all',
  templateUrl: './inventorydetailslist-all.component.html',
  styleUrls: ['./inventorydetailslist-all.component.css']
})
export class InventorydetailslistAllComponent implements OnInit {

  constructor(private service:InventoryserviceService) { }
  errMsg
  inventoryList

  ngOnInit(): void { 
    this.getInventoryDetails()
  }

  // arraylist
  getInventoryDetails() {
    this.service.getAllInventoryDetails().subscribe( data => {
      console.log(data);
      this.inventoryList = data
    }, err => this.errMsg = err)

  }

}
