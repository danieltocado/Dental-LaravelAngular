import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit{

  public appointment: Appointment;

  ShowAppointments: object;


  constructor(public AppointmentService:AppointmentService) { }

  ngOnInit() {
    this.AppointmentService.getAppointments()
    .subscribe(

      res => {
        this.ShowAppointments = res
        this.calendarOptions.events = res.map(appointment => ({date:appointment.appointment_date, title:appointment.appointment_type}))

      },
      error => console.error(error),
      () => console.log(this.ShowAppointments),
    )

  }

  getAppointments(): Appointment[] {
    console.log(this.appointment)
    return this.AppointmentService.getAppointmentsB();

  }

  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Cita con el doctor Bayarri', date: `2020-08-05T15:50` },
      { title: 'event 2', date: '2020-08-05T13:50' }
    ],
    weekends: false
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
    console.log(arg.dateStr)
  }

}
