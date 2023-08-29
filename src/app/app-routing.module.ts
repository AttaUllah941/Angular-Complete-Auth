import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WebsiteComponent } from './website/website.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent} ,
  {path:'signup' , component:SignupComponent} ,
  {path:'website' , component:WebsiteComponent , canActivate: [AuthGuard]} ,

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
