import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ReclamationComponent } from '../main-app/maintenance/reclamation/reclamation.component';
import { LoginComponent } from '../main-app/user/login/login.component';
import { OrderComponent } from '../main-app/restaurant/order/order.component';
import { BookingComponent } from '../main-app/foyer/booking/booking.component';
import { RegisterComponent } from '../main-app/user/register/register.component';
import { ForumComponent } from '../main-app/forum/forum/forum.component';
import { DetailsComponent } from '../main-app/maintenance/reclamation/pages/details/details.component';
import {ExtendBookingComponent} from "../main-app/foyer/extend-booking/extend-booking.component";
import {UpdateRoomComponent} from "../main-app/foyer/update-room/update-room.component";
import {GetAllRoomsComponent} from "../main-app/foyer/get-all-rooms/get-all-rooms.component";
import {FoyerComponent} from "../main-app/foyer/foyer/foyer.component";
import {GetAllBookingComponent} from "../main-app/foyer/get-all-booking/get-all-booking.component";
import {CreateRoomComponent} from "../main-app/foyer/create-room/create-room.component";
import {CreateBookingComponent} from "../main-app/foyer/create-booking/create-booking.component";
import {DeleteRoomComponent} from "../main-app/foyer/delete-room/delete-room.component";

export const MaterialRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'reclamation',
    component: ReclamationComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent
      }
    ]
  },
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'rooms',
    component: GetAllRoomsComponent
  },  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'foyer',
    component: FoyerComponent
  },
  {
    path: 'bookingList',
    component: GetAllBookingComponent
  },
  {
    path: 'addRooms',
    component: CreateRoomComponent
  },
  {
    path: 'createBooking',
    component: CreateBookingComponent
  },
  {
    path: 'deleteRoom',
    component: DeleteRoomComponent
  },
  {
    path: 'updateRoom',
    component: UpdateRoomComponent
  },
  {
    path: 'ExtendBooking',
    component: ExtendBookingComponent
  },
];
