import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoMedicinabucalComponent } from './tratamiento-medicinabucal.component';

describe('TratamientoMedicinabucalComponent', () => {
  let component: TratamientoMedicinabucalComponent;
  let fixture: ComponentFixture<TratamientoMedicinabucalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoMedicinabucalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoMedicinabucalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
