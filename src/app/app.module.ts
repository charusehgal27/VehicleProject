import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { EmploymentapplicationComponent } from './employmentapplication/employmentapplication.component';
import { VehicleapplicationnComponent } from './vehicleapplicationn/vehicleapplicationn.component';
import { LoandetailapplicationnComponent } from './loandetailapplicationn/loandetailapplicationn.component';
import { DocumentapplicationComponent } from './documentapplication/documentapplication.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    UserLoginComponent,
    UserDashboardComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    EmiCalculatorComponent,
    EmploymentapplicationComponent,
    VehicleapplicationnComponent,
    LoandetailapplicationnComponent,
    DocumentapplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
