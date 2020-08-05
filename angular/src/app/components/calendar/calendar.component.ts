import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Cita con el doctor Bayarri', date: '2020-08-07' },
      { title: 'event 2', date: '2020-08-02' }
    ],
    weekends: false
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
    console.log(arg.dateStr)
  }

}
