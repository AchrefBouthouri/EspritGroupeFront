import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';



@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class FoyerModule { }
