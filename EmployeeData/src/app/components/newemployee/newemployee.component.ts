import { Component } from '@angular/core';
import { NewEmployeeData } from './employee2';

@Component({
  selector: 'empdata-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent {
  public tableName="Employees data from API";
}
