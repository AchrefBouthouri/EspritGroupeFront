import { Component, OnInit } from '@angular/core';
import {Booking} from "./booking";
import {BookingService} from "./booking.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Pipe, PipeTransform } from '@angular/core';

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
  filteredBookings: any;
  searchTerm: any;
  searchOption:any;


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

  // deleteBooking(bookingId: number): void {
  //   this.bookingService.deleteBooking(bookingId).subscribe(() => {
  //     this.bookings = this.bookings.filter((booking) => booking.bookingId !== bookingId);
  //     this.snackBar.open('Booking deleted successfully', 'Close', { duration: 3000 });
  //   }, () => {
  //     this.snackBar.open('Error deleting booking', 'Close', { duration: 3000 });
  //   });
  // }
  deleteBooking(bookingId: number): void {
    this.deletingBooking = true; // set the variable to true
    this.bookingService.deleteBooking(bookingId).subscribe(() => {
      this.bookings = this.bookings.filter((booking) => booking.bookingId !== bookingId);
      this.snackBar.open('Booking deleted successfully', 'Close', { duration: 3000 });
    }, () => {
      this.snackBar.open('Error deleting booking', 'Close', { duration: 3000 });
    }).add(() => {
      this.deletingBooking = false; // set the variable to false after the service call completes
    });
  }
  goToExtendBooking(bookingId: number): void {
    this.router.navigate(['ExtendBooking', bookingId]);
  }
///////
  filterBookings(): void {
    if (!this.searchTerm || !this.searchOption) {
      this.filteredBookings = null;
      return;
    }

    const filtered = this.bookings.filter(booking => {
      const term = this.searchTerm.toLowerCase().trim();
      const option = this.searchOption.toLowerCase();

      switch (option) {
        case 'booking id':
          return booking.bookingId.toString().toLowerCase().includes(term);

        case 'room id':
          return booking.roomId.toString().toLowerCase().includes(term);

        case 'start date':
          return booking.startDate.toString().toLowerCase().includes(term);

        case 'end date':
          return booking.endDate.toString().toLowerCase().includes(term);

        case 'user email':
          return booking.userEmail.toLowerCase().includes(term);

        default:
          return false;
      }
    });

    this.filteredBookings = filtered.length ? filtered : null;
  }
  //////
}
