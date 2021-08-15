import { OrcamentoService } from './../../../../service/orcamento.service';
import { Component, OnInit, Input } from '@angular/core';
import { Orcamento } from 'src/app/model/orcamento';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-realiza-orcamento',
  templateUrl: './realiza-orcamento.component.html',
  styleUrls: ['./realiza-orcamento.component.scss'],
})

export class RealizaOrcamentoComponent implements OnInit {

  orcamento: Orcamento;

  orcamentoForm: FormGroup;

  cupom: boolean = false;

  cupomConfirmado: boolean = false;

  sendEmail: boolean = false;

  showOption: boolean;

  showError: boolean;

  erro: any;

  result: any;

  constructor(private config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder, private orcamentoService: OrcamentoService, private toastr: ToastrService) {

    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.orcamentoForm = this.fb.group({
      inputDay: [null], inputTypeEvent: [null], inputInvit: [null], inputSelectCupom: [false], inputTextCupom: [null]
    });
  }

  clear() {
    this.orcamentoForm.get('inputDay').setValue('');
    this.orcamentoForm.get('inputTypeEvent').setValue('');
    this.orcamentoForm.get('inputInvit').setValue('');
    this.orcamentoForm.get('inputTextCupom').setValue('');
    this.sendEmail = false;
  }

  cupomEvt(evt: any) {
    this.cupom = evt.target.checked;
    if (evt.target.checked == false) {
      this.orcamentoForm.get('inputTextCupom').setValue('');
    }
    console.log(this.cupom);
  }

  orcarValor(content) {
    this.verifyCupom()
    this.orcamento = new Orcamento()
    this.orcamento.dia = this.orcamentoForm.get('inputDay').value;
    this.orcamento.tipoEvento = this.orcamentoForm.get('inputTypeEvent').value;
    this.orcamento.convidados = this.orcamentoForm.get('inputInvit').value;
    this.orcamento.cupom = this.cupomConfirmado;
    if (this.orcamento.dia == null || this.orcamento.tipoEvento == null || this.orcamento.convidados == null) {
      this.toastr.info('Por favor preencha todos os campos.', 'CAMPOS VÁZIOS');
    } else {
      this.orcamentoService.realizarOrcamento(this.orcamento).subscribe((data) => {
          this.modalService.open(content);
          this.result = data,
          this.sendEmail = true,
          this.toastr.success('Orçamento realizado.')
      },
        (error: any) => {
          console.log(this.result);
          this.erro = error;
          this.toastr.error('Ocorreu um erro inesperado, tente novamente.')
        });
    }
  }

  closeDialog() {
    this.modalService.dismissAll();
    this.sendEmail = false;
    this.clear();
  }

  verifyCupom() {
    let cupomOn = 'CHACARA2021';
    if (cupomOn == this.orcamentoForm.get('inputTextCupom').value) {
      this.cupomConfirmado = true;
    } else {
      this.cupomConfirmado = false;
    }
  }

  show() {
    this.showOption = true;
  }

}
