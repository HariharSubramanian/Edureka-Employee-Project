import { Component, OnInit } from '@angular/core';
import { NewEmpDataService } from 'src/app/services/new-emp-data.service';
import { NewEmployeeData } from './employee2';

@Component({
  selector: 'empdata-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {
  public tableName="Employees data from API";
  public empDataValues:NewEmployeeData[]=[];
  constructor(private newemp:NewEmpDataService){}
  ngOnInit():void{
    this.newemp.getEmpData().subscribe((response)=>{
      this.empDataValues=response.data;
    })
  }
}
