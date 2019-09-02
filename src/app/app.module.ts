import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';

import { AuthComponent } from './auth/auth.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CameraComponent } from './photographer/camera/camera.component';
import { PhotoComponent } from './photographer/photo/photo.component';
@NgModule({
  declarations: [AppComponent, PhotographerComponent, CameraComponent, AuthComponent, SigninComponent, SignupComponent, PhotoComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
