import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { Appointment } from '../models/appointment.model';
import { DatepickerViewModel } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  API_URL:string = environment.API_URL;
  AppointmentChoosen: object[];

  public appointment: Appointment;
  public appointments: Appointment[] = [];

  constructor(private HttpClient: HttpClient) { }

  create(appointment: Appointment): Observable<Appointment> {
    console.log(appointment);
    return this.HttpClient.post<Appointment>(this.API_URL + '/api/appointment/create', appointment, {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    });
  }

  remove(appointment_id: any): Observable<any>{
    console.log(appointment_id);
    return this.HttpClient.delete<any>(this.API_URL + '/api/appointment/delete', appointment_id);
  }

  setAppointment(appointment: Appointment):void {
    this.appointment = appointment;
  }

  getAppointment(): Appointment {
    return this.appointment;
  }

  getAppointments():Observable<any> {
    return this.HttpClient.get(this.API_URL+'/api/appointment', {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    });
  }

  getUserAppointments():Observable<any> {
    return this.HttpClient.get<any>(this.API_URL+'/api/appointment/user-appointments', {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    });
  }

  setAppointments(appointments:Appointment[]):void {

    this.appointments = appointments;
  }

  getAppointmentsB(): Appointment[] {
    return this.appointments;
  }

  findAppointment(AppointmentChoose: Appointment[]): object {
    this.AppointmentChoosen = AppointmentChoose;
    return;
  }

}
