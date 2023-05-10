import {Component, NgModule, OnInit} from '@angular/core';
import {Booking} from "./booking";
import {BookingService} from "./booking.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-all-booking',
  templateUrl: './get-all-booking.component.html',
  styleUrls: ['./get-all-booking.component.css']
})
export class GetAllBookingComponent implements OnInit {

  bookings: Booking[] = [];
  extendBookingForm: FormGroup;
  deleteBookingForm: FormGroup;
  deletingBooking = false;


  constructor(private bookingService: BookingService, private formBuilder: FormBuilder,private router: Router, private snackBar: MatSnackBar) {
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
    this.deletingBooking = true; // set the variable to true
    this.bookingService.deleteBooking(bookingId).subscribe(() => {
      this.bookings = this.bookings.filter((booking) => booking.bookingId !== bookingId);
      this.snackBar.open('Booking deleted successfully', 'Close', { duration: 3000 });
    }, () => {
      this.snackBar.open('Error deleting booking', 'Close', { duration: 3000 });
    }).add(() => {
      this.deletingBooking = false;
    });
  }
  goToExtendBooking(bookingId: number): void {
    this.router.navigate(['ExtendBooking', bookingId]);
  }


}
