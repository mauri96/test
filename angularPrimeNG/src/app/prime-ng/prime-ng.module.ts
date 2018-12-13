import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, InputTextModule,ButtonModule ,
    TableModule , DialogModule,CheckboxModule,RadioButtonModule,
    AccordionModule,SelectButtonModule 
    ],
    exports:
    [CommonModule, InputTextModule,ButtonModule ,
      TableModule , DialogModule,CheckboxModule,RadioButtonModule,
      AccordionModule
    
    ]
})
export class PrimeNGModule { }
