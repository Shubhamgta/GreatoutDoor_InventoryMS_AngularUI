import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InventorydetailsComponent } from './component/inventorydetails/inventorydetails.component';
import { InventorydetailslistAllComponent } from "./component/inventorydetailslist-all/inventorydetailslist-all.component";
import { InventorydetailslistComponent } from "./component/inventorydetailslist/inventorydetailslist.component";


const routes: Routes = [
  { path: 'inventories/add', component: InventorydetailsComponent },
  { path: 'inventories', component: InventorydetailslistComponent },
  { path: 'inventories/all', component: InventorydetailslistAllComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
