import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
