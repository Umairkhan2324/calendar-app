import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    CalendarComponent,
    AddAppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CalendarModule { }
