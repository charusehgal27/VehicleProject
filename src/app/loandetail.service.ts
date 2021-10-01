import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanTable } from './loandetailapplicationn/LoanTable';

@Injectable({
  providedIn: 'root'
})
export class LoandetailService {
  baseURL="http://localhost:8085/";
  constructor(private myHttp: HttpClient) { }

  insertloanService(loan: LoanTable)  {
    console.log('Service:inserting loan from spring');
    return this.myHttp.post(this.baseURL+"addJPALoan",loan);
  }

}
