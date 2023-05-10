import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { RestaurantComponent } from './restaurant.component';



@NgModule({
  declarations: [
    OrderComponent,
    MenuComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class RestaurantModule { }
