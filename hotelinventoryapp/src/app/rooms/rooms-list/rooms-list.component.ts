import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent  implements OnInit{

  @Input() rooms: RoomList[] = [];

  @Output() roomSelected = new EventEmitter<RoomList>();



  ngOnInit(): void {

  }

  roomSelect(room: RoomList){
    this.roomSelected.emit(room)
  }

}
