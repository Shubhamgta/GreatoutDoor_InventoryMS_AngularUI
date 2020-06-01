import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventorydetailsComponent } from './component/inventorydetails/inventorydetails.component';
import { InventorydetailslistComponent } from './component/inventorydetailslist/inventorydetailslist.component';
import { InventorydetailslistAllComponent } from './component/inventorydetailslist-all/inventorydetailslist-all.component';

@NgModule({
  declarations: [
    AppComponent,
    InventorydetailsComponent,
    InventorydetailslistComponent,
    InventorydetailslistAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
