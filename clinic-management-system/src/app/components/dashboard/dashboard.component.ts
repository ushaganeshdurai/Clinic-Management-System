import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  confirmLogout(): void {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      this.logout();
    }else{
      console.log('User chose not to logout');
    }
  }

  logout(): void {
    // Clear user session or token here
    // For example, localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }
}
