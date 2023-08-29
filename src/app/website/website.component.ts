import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {

  constructor ( private router:Router)
  {}

  onLogout(){
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

}
