import { Component, OnInit } from '@angular/core';
import { InventoryserviceService } from 'src/app/service/inventoryservice.service';

@Component({
  selector: 'app-inventorydetailslist',
  templateUrl: './inventorydetailslist.component.html',
  styleUrls: ['./inventorydetailslist.component.css']
})

export class InventorydetailslistComponent implements OnInit {

  constructor(private service:InventoryserviceService) { }
  errMsg
  inventoryList

  ngOnInit(): void { }

  // arraylist
  getInventoryDetails(form:any) {
    this.service.getInventoryDetails(form.inventoryId).subscribe( data => {
      console.log(data);
      this.inventoryList = data
    }, err => this.errMsg = err)

  }
  

}
