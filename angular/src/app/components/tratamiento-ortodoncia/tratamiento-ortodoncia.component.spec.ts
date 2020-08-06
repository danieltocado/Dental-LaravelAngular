import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoOrtodonciaComponent } from './tratamiento-ortodoncia.component';

describe('TratamientoOrtodonciaComponent', () => {
  let component: TratamientoOrtodonciaComponent;
  let fixture: ComponentFixture<TratamientoOrtodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoOrtodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoOrtodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
