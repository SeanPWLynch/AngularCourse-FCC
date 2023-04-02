import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent{

  hotelName = 'Hilton Hotels';
  numberOfRooms = 100;

  hiderooms = false

  rooms : Room  = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: RoomList[] =
  [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
      checkInTime: new Date('02-April-2023'),
      checkOutTime: new Date('03-April-2023')
    },
    {
      roomNumber: 2,
      roomType: 'Single Room',
      amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
      price: 300,
      photos: 'https://media.istockphoto.com/id/1044040182/photo/bedroom-interior.jpg?s=612x612&w=0&k=20&c=qbu-2lryG55jgj5zZ-eiM4Q5UhdOiXoHBDTIBJ5SqyE=',
      checkInTime: new Date('02-April-2023'),
      checkOutTime: new Date('03-April-2023')
    },
    {
      roomNumber: 31,
      roomType: 'Executive Room',
      amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
      checkInTime: new Date('02-April-2023'),
      checkOutTime: new Date('13-April-2023')
    },
    {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Aircon, Wifi ,TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
      checkInTime: new Date('02-April-2023'),
      checkOutTime: new Date('03-April-2023')
    }
  ]

  toggle() {
    this.hiderooms = !this.hiderooms;
  }


}
