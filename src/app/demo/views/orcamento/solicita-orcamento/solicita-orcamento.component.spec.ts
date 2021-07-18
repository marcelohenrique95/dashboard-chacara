import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaOrcamentoComponent } from './solicita-orcamento.component';

describe('SolicitaOrcamentoComponent', () => {
  let component: SolicitaOrcamentoComponent;
  let fixture: ComponentFixture<SolicitaOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitaOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
