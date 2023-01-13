import { Component, OnInit } from '@angular/core';
import { EmpConfigServiceService } from 'src/app/services/emp-config-service.service';
import { NewEmpDataService } from 'src/app/services/new-emp-data.service';
import { Employee } from '../emptable/employee';
import { NewEmployeeData } from './employee2';

@Component({
  selector: 'empdata-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {
  public tableName="Employees data from API";
  public empDataValues:Employee[]=[]
  constructor(private newemp:NewEmpDataService){}
  ngOnInit():void{
    this.newemp.getEmpData().subscribe((response)=>{
      this.empDataValues=response;
    })
  }
}
