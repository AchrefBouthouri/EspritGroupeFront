import { Component, OnInit } from '@angular/core';
import { Room, RoomType } from '../get-all-rooms/room';
import {RoomService} from "./room.service";
import {DeleteRoomComponent} from "../delete-room/delete-room.component";
import { MatDialog } from '@angular/material/dialog';
import { CreateBookingComponent } from '../create-booking/create-booking.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-rooms',
  templateUrl: './get-all-rooms.component.html',
  styleUrls: ['./get-all-rooms.component.css']
})
export class GetAllRoomsComponent implements OnInit {
  rooms: Room[] = [];
  roomTypes = Object.values(RoomType);
  selectedRoom: Room | undefined;

  constructor(private roomService: RoomService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }
  updateRoom(roomNumber: string, room: Room): void {
    this.roomService.updateRoom(roomNumber, room).subscribe(() => {
      this.getRooms();
    });
  }
  onSelect(room: Room): void {
    this.selectedRoom = room;
  }
  createBooking(roomId: number): void {
    this.router.navigate(['/createBooking', roomId]);
  }
  openBookingForm(room: Room): void {
    console.log('Room ID:', room.id); // add this line
    const dialogRef = this.dialog.open(CreateBookingComponent, {
      width: '500px',
      height: '600px',
      data: {roomId: room.id}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getRooms();
    });
    dialogRef.componentInstance.booking.roomId = room.id; // add this line to set the value

  }
}
