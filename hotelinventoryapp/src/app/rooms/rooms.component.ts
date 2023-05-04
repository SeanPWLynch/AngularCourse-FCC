import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { AfterViewChecked } from '@angular/core';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  //roomService = new RoomsService();

  constructor(private roomsService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  selectedRoom!: RoomList;



  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  roomList: RoomList[] = [];


  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Rooms View After View Checked';
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
  }

  ngDoCheck(): void {
    //console.log('On Changes Is Called');
  }



  hotelName = 'Hilton Hotels';

  hiderooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  title: string = 'Room List';

  toggle() {
    this.hiderooms = !this.hiderooms;
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
