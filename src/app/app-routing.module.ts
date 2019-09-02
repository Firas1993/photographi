import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotographerComponent } from './photographer/photographer.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PhotoComponent } from './photographer/photo/photo.component';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'profile', component: PhotographerComponent },
  { path: 'photo', component: PhotoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
