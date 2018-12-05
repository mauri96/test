import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import {materialModule} from './material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    materialModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
