import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{

  hotelName = 'Hilton Hotels';
  numberOfRooms = 100;

  hiderooms = false

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle() {
    this.hiderooms = !this.hiderooms;
  }


}
