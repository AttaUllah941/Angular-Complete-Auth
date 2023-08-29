import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { WebsiteComponent } from './website/website.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';  // adjust the path

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WebsiteComponent,
    HomeComponent,
    ServicesComponent,
    DashboardComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,
    MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatProgressSpinnerModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,MatCardModule,MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true ,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
