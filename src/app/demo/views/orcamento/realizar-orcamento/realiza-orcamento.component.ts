import { OrcamentoService } from './../../../../service/orcamento.service';
import { Component, OnInit } from '@angular/core';
import { Orcamento } from 'src/app/model/orcamento';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder, private orcamentoService: OrcamentoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.orcamentoForm = this.fb.group({
      inputDay: [null], inputTypeEvent: [null], inputInvit: [null]
    });
  }

  clear() {
    this.orcamentoForm.get('inputDay').setValue('');
    this.orcamentoForm.get('inputTypeEvent').setValue('');
    this.orcamentoForm.get('inputInvit').setValue('');
  }

  orcarValor() {
    this.orcamento = new Orcamento()
    this.orcamento.dia = this.orcamentoForm.get('inputDay').value;
    this.orcamento.tipoEvento = this.orcamentoForm.get('inputTypeEvent').value;
    this.orcamento.convidados = this.orcamentoForm.get('inputInvit').value;
    if(this.orcamento.dia == null || this.orcamento.tipoEvento == null || this.orcamento.convidados == null){
      this.toastr.info('Por favor preencha todos os campos.', 'CAMPOS VÁZIOS');
    } else {
      this.orcamentoService.realizarOrcamento(this.orcamento).subscribe((data) => {this.result = data});
      this.toastr.success('', 'SUCESSO');
    }

    console.log('resultado');
    console.log(this.result);
  }

  show(){
    this.showOption = true;
  }

}
