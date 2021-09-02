import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/model/reserva';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-reserva',
  templateUrl: './cadastra-reserva.component.html',
  styleUrls: ['./cadastra-reserva.component.scss']
})
export class CadastraReservaComponent implements OnInit {

  cadastraReservaForm: FormGroup;

  reservaForm: Reserva;

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cadastraReservaForm = this.fb.group({
      inputCliente: [null], inputCelular: [null], inputCpf: [null], inputEvento: [null], inputConv: [null], inputData: [null]
    })
  }

  verifyInput(){
    if(
      this.cadastraReservaForm.get('inputCliente').value == null ||
      this.cadastraReservaForm.get('inputCliente').value == '' ||
      this.cadastraReservaForm.get('inputCelular').value == null ||
      this.cadastraReservaForm.get('inputCelular').value == '' ||
      this.cadastraReservaForm.get('inputCpf').value == null ||
      this.cadastraReservaForm.get('inputCpf').value == ''||
      this.cadastraReservaForm.get('inputEvento').value == null ||
      this.cadastraReservaForm.get('inputEvento').value == ''||
      this.cadastraReservaForm.get('inputConv').value == null ||
      this.cadastraReservaForm.get('inputConv').value == ''||
      this.cadastraReservaForm.get('inputData').value == null ||
      this.cadastraReservaForm.get('inputData').value == ''
      ){
        this.toastr.warning('Dados faltantes', 'ERRO');
    }
    this.cadastrar();
  }

  cadastrar(){

  }

}
