import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizaOrcamentoComponent } from './realiza-orcamento.component';

describe('RealizaOrcamentoComponent', () => {
  let component: RealizaOrcamentoComponent;
  let fixture: ComponentFixture<RealizaOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizaOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizaOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
