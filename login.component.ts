
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { API_URLS, UI_TEXTS } from '../constants';  // Import constants
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin123') {
      // Perform login action here
      alert(UI_TEXTS.invoiceCreated);  // Use constant for success message
      this.router.navigate(['/invoices']);
    } else {
      alert(UI_TEXTS.invalidCredentials);  // Use constant for error message
    }
  }
}
