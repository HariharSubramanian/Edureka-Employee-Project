import { Component } from '@angular/core';
import { Employee } from './employee';

const empData:Employee[]=[
  {
    empId:2,
    firstName:"John",
    lastName:"Smith",
    salary:10000,
    dob:"Wed Nov 02 1983 00:00:00 GMT +0530 (India Standard Time)",
    email:"john@abc.com",
  }
]

@Component({
  selector: 'empdata-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})

export class EmptableComponent {
  tableName="Employees";
  employeesData=empData;

  showEdit:boolean=false;

  EditEmp():void{
    this.showEdit=true;
  }
  UpdateEmp():void{
    this.showEdit=false;
  }
}
