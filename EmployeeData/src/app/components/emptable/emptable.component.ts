import { Component } from '@angular/core';
import { Employee } from './employee';

const emplist:Employee[]=[
  {
    empId:2,
    firstName:"John",
    lastName:"Smith",
    salary:10000,
    dob:"Wed Nov 02 1983 00:00:00 GMT +0530 (India Standard Time)",
    email:"john@abc.com",
  },
  {
    empId:3,
    firstName:"Jason",
    lastName:"Smith",
    salary:12000,
    dob:"Tue Aug 12 1980 00:00:00 GMT +0530 (India Standard Time)",
    email:"jason@abc.com",
  },
  {
    empId:4,
    firstName:"Amber",
    lastName:"Dorothy",
    salary:13000,
    dob:"Fri Apr 05 1985 00:00:00 GMT +0530 (India Standard Time)",
    email:"amber@abc.com",
  },
  {
    empId:5,
    firstName:"Mark",
    lastName:"Frank",
    salary:15000,
    dob:"Thu Jun 10 1982 00:00:00 GMT +0530 (India Standard Time)",
    email:"mark@abc.com",
  }
]

@Component({
  selector: 'empdata-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})

export class EmptableComponent {
  tableName="Employees";
  employeesList=emplist;
}
