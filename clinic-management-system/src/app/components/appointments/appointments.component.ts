import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsService } from '../../services/appointment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  newAppointment = { date: '', time: '', patient: '', reason: '' };

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.appointmentsService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  createAppointment(): void {
    this.appointmentsService.createAppointment(this.newAppointment);
    this.newAppointment = { date: '', time: '', patient: '', reason: '' };
  }
}
