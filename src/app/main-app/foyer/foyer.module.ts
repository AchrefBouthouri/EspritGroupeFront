import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { GetAllRoomsComponent } from './get-all-rooms/get-all-rooms.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { GetAllBookingComponent } from './get-all-booking/get-all-booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
import {ExtendBookingComponent} from "./extend-booking/extend-booking.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import { FoyerComponent } from './foyer/foyer.component';
import {FlexModule} from "@angular/flex-layout";
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    GetAllRoomsComponent,
    GetAllRoomsComponent,
    CreateRoomComponent,
    DeleteRoomComponent,
    UpdateRoomComponent,
    GetAllBookingComponent,
    CreateBookingComponent,
    DeleteBookingComponent,
    ExtendBookingComponent,
    StatisticsComponent,
    FoyerComponent,
    BookingComponent,
    StatisticsComponent


  ],
  providers: [
    FormBuilder
  ],

  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexModule
  ],

})
export class FoyerModule { }
