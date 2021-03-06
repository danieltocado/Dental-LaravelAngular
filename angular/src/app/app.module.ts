import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeimageComponent } from './components/homeimage/homeimage.component';
import { HomeComponent } from './components/home/home.component';
import { HomeinfoComponent } from './components/homeinfo/homeinfo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CardCitaComponent } from './components/card-cita/card-cita.component'
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TratamientoOrtodonciaComponent } from './components/tratamiento-ortodoncia/tratamiento-ortodoncia.component';
import { TratamientoEsteticadentalComponent } from './components/tratamiento-esteticadental/tratamiento-esteticadental.component';
import { TratamientoMedicinabucalComponent } from './components/tratamiento-medicinabucal/tratamiento-medicinabucal.component';
import { TratamientoOdontopediatriaComponent } from './components/tratamiento-odontopediatria/tratamiento-odontopediatria.component';
import { TratamientoOtrosComponent } from './components/tratamiento-otros/tratamiento-otros.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AllAppointmentsComponent } from './components/all-appointments/all-appointments.component'; // a plugin
import { WavesModule, TableModule, InputsModule } from 'angular-bootstrap-md';
import { ErrorComponent } from './components/error/error.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    FooterComponent,
    HomeimageComponent,
    HomeComponent,
    HomeinfoComponent,
    RegisterComponent,
    LoginComponent,
    CardCitaComponent,
    CalendarComponent,
    TratamientoOrtodonciaComponent,
    TratamientoEsteticadentalComponent,
    TratamientoMedicinabucalComponent,
    TratamientoOdontopediatriaComponent,
    TratamientoOtrosComponent,
    AppointmentComponent,
    ProfileComponent,
    AllAppointmentsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
    WavesModule,
    TableModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
