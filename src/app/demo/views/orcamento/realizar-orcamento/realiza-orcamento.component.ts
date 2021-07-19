import { OrcamentoService } from './../../../../service/orcamento.service';
import { Component, OnInit } from '@angular/core';
import { Orcamento } from 'src/app/model/orcamento';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-realiza-orcamento',
  templateUrl: './realiza-orcamento.component.html',
  styleUrls: ['./realiza-orcamento.component.scss']
})
export class RealizaOrcamentoComponent implements OnInit {

  orcamento: Orcamento;

  orcamentoForm: FormGroup;

  showOption: boolean;

  showError: boolean;

  result: any;


  constructor(private fb: FormBuilder, private orcamentoService: OrcamentoService) { }

  ngOnInit(): void {
    this.orcamentoForm = this.fb.group({
      inputDay: [null], inputTypeEvent: [null], inputInvit: [null]
    });
  }

  handleChange(event) {
    event.target.checked;
  }

  realizarOrc() {
    this.orcamento = new Orcamento()
    this.orcamento.dayEnum = this.orcamentoForm.get('inputDay').value;
    this.orcamento.typeEvent = this.orcamentoForm.get('inputTypeEvent').value;
    this.orcamento.qtdPerson = this.orcamentoForm.get('inputInvit').value;
    if(this.orcamento.dayEnum == null || this.orcamento.typeEvent == null || this.orcamento.qtdPerson == null){
      this.showError = true;
    } else {
      this.orcamentoService.realizarOrcamento(this.orcamento.dayEnum,
        this.orcamento.typeEvent, this.orcamento.qtdPerson).subscribe((data) => {this.result = data});
    }

    console.log('resultado');
    console.log(this.result);


  }

  show(){
    this.showOption = true;
  }

}
