import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private basePath = '/appointments';

  constructor(private db: AngularFireDatabase) {}

  createAppointment(appointment: any): void {
    this.db.list(this.basePath).push(appointment);
  }

  getAppointments(): Observable<any[]> {
    return this.db.list(this.basePath).valueChanges();
  }
}
