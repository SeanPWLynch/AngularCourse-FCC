import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  empName: string = 'John Doe';

  constructor() { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


}
