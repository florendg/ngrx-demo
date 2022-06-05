import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AddressComponent} from "./address/address.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AddressComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
