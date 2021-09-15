import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarDataComponent } from './reservar-data.component';

describe('ReservarDataComponent', () => {
  let component: ReservarDataComponent;
  let fixture: ComponentFixture<ReservarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
