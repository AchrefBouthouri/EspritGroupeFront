import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';



@NgModule({
  declarations: [
    OrderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class RestaurantModule { }
