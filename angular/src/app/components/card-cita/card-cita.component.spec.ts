import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCitaComponent } from './card-cita.component';

describe('CardCitaComponent', () => {
  let component: CardCitaComponent;
  let fixture: ComponentFixture<CardCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
