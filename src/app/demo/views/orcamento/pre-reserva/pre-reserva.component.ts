import { ClienteService } from './../../../../service/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from './../../../../model/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-reserva',
  templateUrl: './pre-reserva.component.html',
  styleUrls: ['./pre-reserva.component.scss']
})
export class PreReservaComponent implements OnInit {

  cliente: Cliente;

  clienteForm: FormGroup;

  erro: any;


  constructor(private fb: FormBuilder, private toastr: ToastrService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      inputName: [null], inputSecondName: [null], inputCellphone: [null], inputEmail: [null]
    });
  }

  clear() {
    this.clienteForm.get('inputName').setValue('');
    this.clienteForm.get('inputSecondName').setValue('');
    this.clienteForm.get('inputCellphone').setValue('');
    this.clienteForm.get('inputEmail').setValue('');

  }

  verifyInput() {
    if (
      this.clienteForm.get('inputName').value == null ||
      this.clienteForm.get('inputName').value == '' ||
      this.clienteForm.get('inputSecondName').value == null ||
      this.clienteForm.get('inputSecondName').value == '' ||
      this.clienteForm.get('inputCellphone').value == null ||
      this.clienteForm.get('inputCellphone').value == '' ||
      this.clienteForm.get('inputEmail').value == null ||
      this.clienteForm.get('inputEmail').value == '') {
      this.toastr.warning('Preencha todos os campos');
    } else {
      this.registrar();
    }

  }

  registrar() {
    this.cliente = new Cliente();
    this.cliente.name = this.clienteForm.get('inputName').value + '' + this.clienteForm.get('inputSecondName').value;
    this.cliente.cellphone = this.clienteForm.get('inputCellphone').value
    this.cliente.email = this.clienteForm.get('inputEmail').value

    this.clienteService.registrarCliente(this.cliente).subscribe((data) => {
      this.toastr.success('Cadastro realizado.')
    },
      (error: any) => {
        this.erro = error;
        this.toastr.error('Ocorreu um erro inesperado, tente novamente.');
        this.clear();
      }
    )

  }

}
