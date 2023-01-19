import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmpConfigServiceService } from './emp-config-service.service';
import { Employee } from '../components/emptable/employee';
import { NewEmployeeData } from '../components/newemployee/employee2';

@Injectable({
  providedIn: 'root'
})
export class NewEmpDataService {
  
  constructor(private http:HttpClient,private empconfig:EmpConfigServiceService) { }

  public getEmpData(){
    return this.http.get<NewEmployeeData[]>(this.empconfig.EMP_DATA_API);
  }
}
