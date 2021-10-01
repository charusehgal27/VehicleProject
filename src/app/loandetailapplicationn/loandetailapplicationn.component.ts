import { Component, OnInit } from '@angular/core';
import { LoanTable } from './LoanTable';
import { LoandetailService } from '../loandetail.service';

@Component({
  selector: 'app-loandetailapplicationn',
  templateUrl: './loandetailapplicationn.component.html',
  styleUrls: ['./loandetailapplicationn.component.css']
})

export class LoandetailapplicationnComponent implements OnInit {
  
  constructor(private loanService:LoandetailService) { }

  
  insertaLoan: LoanTable=new LoanTable();
  insertLoan() {
    console.log('loadEmployment() invoking loadEmploymentService()');
    this.loanService.insertloanService(this.insertaLoan).subscribe(); //end of subscribe 
  }

  ngOnInit(): void {
  }

}
