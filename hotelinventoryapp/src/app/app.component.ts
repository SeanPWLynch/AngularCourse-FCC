import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  constructor(@Optional() private loggerService: LoggerService){

  }

  title = 'hotelinventoryapp';
  role = 'Admin'

  //@ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;

  @ViewChild('name',{static: true}) name!: ElementRef;

  // ngAfterViewInit(): void {
  //    const componentRef = this.vcr.createComponent(RoomsComponent);
  //    componentRef.instance.rooms.totalRooms=100;
  // }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit() called')
    this.name.nativeElement.innerText = "Test";
  }


}
