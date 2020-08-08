import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss']
})
export class AllAppointmentsComponent implements OnInit {


  ShowAppointments: object;


  constructor(public AppointmentService:AppointmentService) { }

  ngOnInit() {
    this.AppointmentService.getAppointments()
    .subscribe(
      res => this.ShowAppointments = res,
      error => console.error(error),
      () => console.log(this.ShowAppointments),
    )

  }

  getAppointments(): Appointment[] {
    return this.AppointmentService.getAppointmentsB();
  }
}
