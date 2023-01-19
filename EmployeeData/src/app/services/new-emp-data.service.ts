import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewEmployeeData } from '../components/newemployee/employee2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewEmpDataService {
  public EMP_DATA_API="http://dummy.restapiexample.com/api/v1/employees"
  
  constructor(private http:HttpClient) { }

  public getEmpData():Observable<NewEmployeeData[]>{
    return this.http.get<NewEmployeeData[]>(this.EMP_DATA_API);
  }
}
