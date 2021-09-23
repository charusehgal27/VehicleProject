import { Component, OnInit } from '@angular/core';
//import { Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Emi Calculator';
  loan!: number;
  rate!: number;
  years!: number;


  rate1=this.rate/(1200);
  years1=this.years;


  emi: number= (this.loan*this.rate1*Math.pow(1+this.rate1,this.years1))/(Math.pow(1+this.rate1,this.years1)-1);
  value: number = 100;
  // options: Options = {
  //   floor: 0,
  //   ceil: 200
  // }  

  calculateEMI() {
    this.emi = (this.loan*this.rate*Math.pow(1+this.rate,this.years))/(Math.pow(1+this.rate,this.years)-1);
    console.log( this.emi);

  }

}
