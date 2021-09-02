import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraReservaComponent } from './cadastra-reserva.component';

describe('CadastraReservaComponent', () => {
  let component: CadastraReservaComponent;
  let fixture: ComponentFixture<CadastraReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
