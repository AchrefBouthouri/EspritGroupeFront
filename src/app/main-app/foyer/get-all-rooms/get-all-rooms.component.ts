import { Component, OnInit } from '@angular/core';
import { Room, RoomType } from '../get-all-rooms/room';
import {RoomService} from "./room.service";
import {DeleteRoomComponent} from "../delete-room/delete-room.component";

@Component({
  selector: 'app-get-all-rooms',
  templateUrl: './get-all-rooms.component.html',
  styleUrls: ['./get-all-rooms.component.css']
})
export class GetAllRoomsComponent implements OnInit {
  rooms: Room[] = [];
  roomTypes = Object.values(RoomType);
  selectedRoom: Room | undefined;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }
  updateRoom(roomNumber: string, room: Room): void {
    this.roomService.updateRoom(roomNumber, room).subscribe(() => {
      this.getRooms(); // Refresh the room list after the update
    });
  }
  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

}
