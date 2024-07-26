import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private _appointments = new BehaviorSubject<Appointment[]>([]);
  appointments$ = this._appointments.asObservable();

  get appointments(): Appointment[] {
    return this._appointments.value;
  }

  addAppointment(appointment: Appointment): void {
    this._appointments.next([...this.appointments, appointment]);
  }

  deleteAppointment(appointment: Appointment): void {
    this._appointments.next(this.appointments.filter(a => a !== appointment));
  }

  updateAppointments(): void {
    this._appointments.next(this.appointments);
  }
}
