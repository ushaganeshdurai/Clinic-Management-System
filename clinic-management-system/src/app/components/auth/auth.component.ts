import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
@Injectable({
  providedIn: 'root',
})
export class AuthComponent {
  loginEmail: string = '';
  loginPassword: string = '';
  registerEmail: string = '';
  registerPassword: string = '';

  constructor(private auth: Auth, private router: Router) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  onLogin() {
    this.login(this.loginEmail, this.loginPassword)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/home']); // Redirect to home page
      })
      .catch((error) => {
        console.error('Login error', error);
      });
  }

  onRegister() {
    this.register(this.registerEmail, this.registerPassword)
      .then(() => {
        console.log('Registration successful');
        this.router.navigate(['/home']); // Redirect to home page
      })
      .catch((error) => {
        console.error('Registration error', error);
      });
  }

  onLogout() {
    this.logout()
      .then(() => {
        console.log('Logout successful');
      })
      .catch((error) => {
        console.error('Logout error', error);
      });
  }

  onLoginWithGoogle() {
    this.loginWithGoogle()
      .then(() => {
        console.log('Google login successful');
        this.router.navigate(['/home']); // Redirect to home page
      })
      .catch((error) => {
        console.error('Google login error', error);
      });
  }

  togglePanel(isSignUp: boolean) {
    const container = document.getElementById('container');
    if (container) {
      if (isSignUp) {
        container.classList.add('right-panel-active');
      } else {
        container.classList.remove('right-panel-active');
      }
    }
  }
}
