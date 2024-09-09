import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignupComponent, HeaderComponent, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) =>
      user.email === this.loginForm.value.email && user.password === this.loginForm.value.password
    );

    if (user) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password');
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
