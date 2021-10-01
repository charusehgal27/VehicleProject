import { Component, OnInit } from '@angular/core';
import { EmploymentTable } from './EmploymentTable';
import { EmploymentService } from '../employment.service';

@Component({
  selector: 'app-employmentapplication',
  templateUrl: './employmentapplication.component.html',
  styleUrls: ['./employmentapplication.component.css']
})
export class EmploymentapplicationComponent implements OnInit {

  constructor(private employmentService:EmploymentService) { }

  
  insertaEmployment: EmploymentTable=new EmploymentTable();
  insertEmployment() {
    console.log('loadEmployment() invoking loadEmploymentService()');
    this.employmentService.insertEmploymentService(this.insertaEmployment).subscribe(); //end of subscribe 
  }


  ngOnInit(): void {
  }

}