import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { CameraComponent } from './photographer/camera/camera.component';
import { PhotoComponent } from './photographer/photo/photo.component';
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, PhotographerComponent, CameraComponent, /*FlexLayoutModule,*/  AuthComponent, SigninComponent, SignupComponent, PhotoComponent, HomeComponent, HeaderComponent, SidenavListComponent, NavtabsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, /*FlexLayoutModule*/],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
