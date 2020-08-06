import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoOdontopediatriaComponent } from './tratamiento-odontopediatria.component';

describe('TratamientoOdontopediatriaComponent', () => {
  let component: TratamientoOdontopediatriaComponent;
  let fixture: ComponentFixture<TratamientoOdontopediatriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoOdontopediatriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoOdontopediatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
