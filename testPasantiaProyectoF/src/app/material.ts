import {MatButtonModule,MatGridListModule,MatCardModule,MatSnackBarModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,MatTableModule,MatPaginatorModule,MatFormFieldModule,MatOptionModule,MatSelectModule, MatListModule,MatIconModule,MatCheckboxModule, MatToolbarModule,MatMenuModule,MatSidenavModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({

  imports: [
    MatButtonModule,MatDatepickerModule,
    MatInputModule,MatNativeDateModule,
    MatPaginatorModule,MatCardModule,MatGridListModule,
    MatSelectModule,
    MatOptionModule,MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule, 
    MatCheckboxModule,
    MatToolbarModule, 
    MatMenuModule,
    MatSidenavModule],
  exports:[
    MatButtonModule,MatInputModule,MatDatepickerModule,
    MatSelectModule,MatNativeDateModule,MatSnackBarModule,
    MatPaginatorModule,MatCardModule,MatGridListModule,
    MatTableModule,
    MatOptionModule,
    MatFormFieldModule,
    MatListModule, 
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule],
  
})
export class materialModule { 
      
}