import { Component, OnInit } from '@angular/core';
import {Booking} from "../get-all-booking/booking";
import {BookingService} from "../get-all-booking/booking.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = new Booking();
  token: string = '';
  amount: number = 0;
  currency: string = '';

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.bookingService.createBooking(this.booking, this.token, this.amount, this.currency)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
