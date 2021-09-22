import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { RegistrationComponent } from './registration/registration.component';
>>>>>>> 696e797c5006c14514fd274a244ca4d1ebcbb117

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent
=======
    RegistrationComponent
>>>>>>> 696e797c5006c14514fd274a244ca4d1ebcbb117
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
