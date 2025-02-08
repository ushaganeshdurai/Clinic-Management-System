import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PatientsComponent {}