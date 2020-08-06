import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoOtrosComponent } from './tratamiento-otros.component';

describe('TratamientoOtrosComponent', () => {
  let component: TratamientoOtrosComponent;
  let fixture: ComponentFixture<TratamientoOtrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoOtrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
