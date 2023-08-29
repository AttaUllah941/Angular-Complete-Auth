import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../serives/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signinForm !: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router:Router ,
     ) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signinForm.valid) {
      
      const email = this.signinForm.get('email')!.value;
      const password = this.signinForm.get('password')!.value;

      this.userService.getAllUsers().subscribe(users => {
        const user = users.find((u: any) => u.email === email && u.password === password);

        if (user) {
          console.log('Successfully signed in!');
          localStorage.setItem('isAuthenticated', 'true');

          this.router.navigate(['/website'])

        } else {
          console.error('Invalid email or password');
        }
      });
    }
  }

}
