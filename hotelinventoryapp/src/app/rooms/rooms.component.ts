import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  selectedRoom!: RoomList;

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  roomList: RoomList[] = [];
  constructor() {}

  ngAfterViewChecked(): void {
    this.headerComponent.title= "Rooms View After View Checked";

    console.log("After View Checked")
  }
  ngAfterViewInit(): void {
  //console.log(this.headerComponent)
  this.headerComponent.title= "Rooms View";
  }

  ngDoCheck(): void {
    //console.log('On Changes Is Called');
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
        checkInTime: new Date('02-April-2023'),
        checkOutTime: new Date('03-April-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Single Room',
        amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
        price: 300,
        photos:
          'https://media.istockphoto.com/id/1044040182/photo/bedroom-interior.jpg?s=612x612&w=0&k=20&c=qbu-2lryG55jgj5zZ-eiM4Q5UhdOiXoHBDTIBJ5SqyE=',
        checkInTime: new Date('02-April-2023'),
        checkOutTime: new Date('03-April-2023'),
        rating: 3.7,
      },
      {
        roomNumber: 31,
        roomType: 'Executive Room',
        amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
        checkInTime: new Date('02-April-2023'),
        checkOutTime: new Date('13-April-2023'),
        rating: 4.52,
      },
      {
        roomNumber: 4,
        roomType: 'Deluxe Room',
        amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
        checkInTime: new Date('02-April-2023'),
        checkOutTime: new Date('03-April-2023'),
        rating: 2.2,
      },
    ];
  }

  hotelName = 'Hilton Hotels';
  numberOfRooms = 100;

  hiderooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  title: string = 'Room List';

  toggle() {
    this.hiderooms = !this.hiderooms;
    this.title = 'Rooms List';
  }

  addRoom() {
    const newRoom: RoomList = {
      roomNumber: 5,
      roomType: 'Deluxe Room',
      amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
      checkInTime: new Date('17-April-2023'),
      checkOutTime: new Date('18-April-2023'),
      rating: 4.4,
    };

    this.roomList = [...this.roomList, newRoom];
  }
}
