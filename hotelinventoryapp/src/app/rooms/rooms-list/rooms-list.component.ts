import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent  implements OnInit, OnChanges , OnDestroy{

  ngOnDestroy(): void {
    console.log('On Destroy Called');
  }

  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() roomSelected = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {

  }

  roomSelect(room: RoomList){
    this.roomSelected.emit(room)
  }

}
