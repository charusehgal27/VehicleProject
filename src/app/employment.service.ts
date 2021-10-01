import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmploymentTable } from './employmentapplication/EmploymentTable';


@Injectable({
  providedIn: 'root'
})
export class EmploymentService {
  baseURL="http://localhost:8085/";
  constructor(private myHttp: HttpClient) { }

  insertEmploymentService(emp: EmploymentTable)  {
    console.log('Service:inserting loan from spring');
    return this.myHttp.post(this.baseURL+"addJPAEmp2",emp);
  }

}