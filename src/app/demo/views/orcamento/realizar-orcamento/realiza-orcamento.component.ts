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

  dias = [
    {id:1 , text: 'Sexta-feira'},
    {id:2, text: 'Sábado'},
    {id:3, text: 'Domingo'},
    {id:4, text: 'Feriado'},
    {id:5, text: 'Sexta E Sábado'},
    {id:6, text: 'Sábado E Domingo'},
    {id:7, text: 'Sexta ATÉ Domingo'},
    {id:0, text: 'Entre segunda e quinta-feira'},
    {id:8, text: 'Carnaval'},
    {id:9, text: 'Natal'},
    {id:10, text: 'Reveillon'},
  ];

  eventos = [
    {id:1 , text: 'Aniversário'},
    {id:2, text: 'Casamento'},
    {id:3, text: 'Churrasco'},
    {id:4, text: 'Chá de bebê'},
    {id:5, text: 'Retiro de Igreja'},
    {id:6, text: 'Familiar'}
  ];

  invites = [
    {id:1 , text: 'Até 10 convidados'},
    {id:2 , text: 'Até 30 convidados'},
    {id:3, text: 'Até 50 convidados'},
    {id:4, text: 'Até 80 convidados'},
  ]

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
    this.orcamentoForm.get('inputSelectCupom').reset();
    this.sendEmail = false;
    this.cupom = false;
    this.cupomConfirmado = false;
    this.orcamentoForm.get('inputTextCupom').enable();
  }

  cupomEvt(evt: any) {
    this.cupom = evt.target.checked;
    if (evt.target.checked == false) {
      this.orcamentoForm.get('inputTextCupom').setValue('');
      this.cupomConfirmado = false;
      this.orcamentoForm.get('inputTextCupom').enable();
    }
  }

  orcarValor(content) {
    this.orcamento = new Orcamento();
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
          this.toastr.error('Ocorreu um erro inesperado, tente novamente.');
          this.clear();
        });
    }
  }

  closeDialog() {
    this.modalService.dismissAll();
    this.sendEmail = false;
    this.clear();
  }

  verifyCupom(evt: string) {
    let cupomOn = 'CHACARA2021';
    console.log(evt);
    if (cupomOn == evt.toUpperCase()) {
      this.cupomConfirmado = true;
      this.orcamentoForm.get('inputTextCupom').disable();
    } else {
      this.cupomConfirmado = false;
    }
  }

  show() {
    this.showOption = true;
  }

}
