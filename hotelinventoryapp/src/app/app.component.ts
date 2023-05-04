import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {




  title = 'hotelinventoryapp';
  role = 'Admin'

  //@ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;

  @ViewChild('name',{static: true}) name!: ElementRef;

  // ngAfterViewInit(): void {
  //    const compontentRef = this.vcr.createComponent(RoomsComponent);
  //    compontentRef.instance.rooms.totalRooms=100;
  // }

  ngOnInit(): void {
    console.log(this.name);
    this.name.nativeElement.innerText = "Test";
  }


}
