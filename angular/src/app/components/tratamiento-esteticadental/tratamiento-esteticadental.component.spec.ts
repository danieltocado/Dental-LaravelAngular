import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoEsteticadentalComponent } from './tratamiento-esteticadental.component';

describe('TratamientoEsteticadentalComponent', () => {
  let component: TratamientoEsteticadentalComponent;
  let fixture: ComponentFixture<TratamientoEsteticadentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoEsteticadentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoEsteticadentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
