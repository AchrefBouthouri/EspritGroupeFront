import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Booking} from "../get-all-booking/booking";

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent {

  @Input() booking!: Booking;
  @Output() deleteBooking = new EventEmitter();

  onDelete(): void {
    this.deleteBooking.emit();
  }

}
