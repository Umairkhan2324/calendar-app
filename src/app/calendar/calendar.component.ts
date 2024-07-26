import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  appointments$;

  constructor(private appointmentService: AppointmentService) {
    this.appointments$ = this.appointmentService.appointments$;
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.appointmentService.appointments, event.previousIndex, event.currentIndex);
    this.appointmentService.updateAppointments();
  }
}

