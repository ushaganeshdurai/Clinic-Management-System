import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';

export const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', component: AuthComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'medicines', component: MedicinesComponent },
  { path: 'prescriptions', component: PrescriptionsComponent },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
