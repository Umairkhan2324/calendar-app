import { Component, Input } from '@angular/core';
import { Appointment } from '../../services/appointment.model';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  @Input() appointment!: Appointment;

  constructor(private appointmentService: AppointmentService) {}

  deleteAppointment(): void {
    this.appointmentService.deleteAppointment(this.appointment);
  }
  updateAppointments(): void {
    this.appointmentService.updateAppointments();
  }
}
