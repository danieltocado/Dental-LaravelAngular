import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TratamientoOrtodonciaComponent } from './components/tratamiento-ortodoncia/tratamiento-ortodoncia.component';
import { TratamientoEsteticadentalComponent } from './components/tratamiento-esteticadental/tratamiento-esteticadental.component';
import { TratamientoMedicinabucalComponent } from './components/tratamiento-medicinabucal/tratamiento-medicinabucal.component';
import { TratamientoOdontopediatriaComponent } from './components/tratamiento-odontopediatria/tratamiento-odontopediatria.component';
import { TratamientoOtrosComponent } from './components/tratamiento-otros/tratamiento-otros.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"calendar", component: CalendarComponent},
  {path:"tratamiento/ortodoncia", component: TratamientoOrtodonciaComponent},
  {path:"tratamiento/estetica-dental", component: TratamientoEsteticadentalComponent},
  {path:"tratamiento/medicina-bucal", component: TratamientoMedicinabucalComponent},
  {path:"tratamiento/odontopediatria", component: TratamientoOdontopediatriaComponent},
  {path:"tratamiento/otros", component: TratamientoOtrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
