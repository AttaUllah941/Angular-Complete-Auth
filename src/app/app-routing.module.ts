import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WebsiteComponent } from './website/website.component';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent} ,
  {path:'signup' , component:SignupComponent} ,
  {path:'website' , component:WebsiteComponent , children:[
    {path:'home' , component:HomeComponent} ,
    {path:'services' , component:ServicesComponent} ,
    {path:'dashboard' , component:DashboardComponent} ,
    {path:'aboutus' , component:AboutusComponent} ,
  ]} ,
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
