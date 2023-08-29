import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../serives/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService , private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      DOB: ['', Validators.required],
      education: ['', Validators.required],
      experience: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
        this.isLoading = true;
        this.userService.registerUser(this.signupForm.value).subscribe(
            response => {
                console.log('User registered:', response);

                // Assuming your backend returns a JWT token like: { token: "YOUR_JWT_TOKEN" }
                const jwtToken = response.token;
                if (jwtToken) {
                    localStorage.setItem('jwtToken', jwtToken);
                }

                this.router.navigate(['/login']);
                this.isLoading = false;
            },
            error => {
                console.error('Error:', error);
                this.isLoading = false;
            }
        );
    }
}

}
