import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './client/landingpage/landingpage.component';
import { SignupformComponent } from './client/signupform/signupform.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LandingpageComponent, SignupformComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
