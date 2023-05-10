import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { FoyerComponent } from './foyer.component';



@NgModule({
  declarations: [
    BookingComponent,
    FoyerComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class FoyerModule { }
