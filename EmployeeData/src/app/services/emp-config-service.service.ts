import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpConfigServiceService {
  public EMP_DATA_API="http://dummy.restapiexample.com/api/v1/employees"
  constructor() { }
}
