import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token'

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage,

  ){

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
    this.localStorage.setItem('name', 'Hilton Hotel');
  }


}
