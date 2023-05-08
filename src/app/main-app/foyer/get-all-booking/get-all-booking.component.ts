import { Component, OnInit } from '@angular/core';
import {Booking} from "./booking";
import {BookingService} from "./booking.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-booking',
  templateUrl: './get-all-booking.component.html',
  styleUrls: ['./get-all-booking.component.css']
})
export class GetAllBookingComponent implements OnInit {

  bookings: Booking[] = [];
  extendBookingForm: FormGroup;
  deleteBookingForm: FormGroup;

  constructor(private bookingService: BookingService, private formBuilder: FormBuilder,private router: Router) {
    this.extendBookingForm = this.formBuilder.group({
      newEndDate: ['', Validators.required],
      token: ['', Validators.required],
      amount: ['', Validators.required],
      currency: ['', Validators.required]
    });

    this.deleteBookingForm = this.formBuilder.group({
      bookingId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(): void {
    this.bookingService.getAllBookings().subscribe((bookings: Booking[]) => {
      this.bookings = bookings;
    });
  }

  deleteBooking(bookingId: number): void {
    this.bookingService.deleteBooking(bookingId).subscribe(() => {

      this.bookings = this.bookings.filter((booking) => booking.bookingId !== bookingId);
    });
  }
  goToExtendBooking(bookingId: number): void {
    this.router.navigate(['ExtendBooking', bookingId]);
  }
}
