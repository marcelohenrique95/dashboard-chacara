import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reserva } from 'src/app/model/reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  reserva: Reserva;

  reservaList: Reserva;

  reservaForm: FormGroup;

  erro: any;

  mesa: any;

  constructor(private fb: FormBuilder, private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.listarReserva();
    this.clearInput();
  }



  clearInput() {
    this.reservaForm = this.fb.group({
      inputNome: [''], inputCel: [''], inputCpf: [''], inputEvento: [null],
       inputConv: [null], inputData: [null], filterNome: [''], filterEvento: ['']
    });
  }

  clear(){
    this.reservaForm.get('inputNome').setValue('');
    this.reservaForm.get('inputCel').setValue('');
    this.reservaForm.get('inputCpf').setValue('');
    this.reservaForm.get('inputEvento').setValue('');
    this.reservaForm.get('inputConv').setValue('');
    this.reservaForm.get('inputData').setValue('');
  }

  checkMesa(event) {
    this.mesa = event.target.checked;
  }

  listarReserva() {
    this.reservaService.listaReservas().subscribe(
      (data: Reserva) => {
        this.reservaList = data
      },
      (error: any) => {
        this.erro = error;
      }

    );

  }

  reservar() {
    this.reserva = new Reserva();
    this.reserva.nome = this.reservaForm.get('inputNome').value;
    this.reserva.celular = this.reservaForm.get('inputCel').value;
    this.reserva.cpf = this.reservaForm.get('inputCpf').value;
    this.reserva.tipoEvento = this.reservaForm.get('inputEvento').value;
    this.reserva.convidados = this.reservaForm.get('inputConv').value;
    this.reserva.diaReserva = this.reservaForm.get('inputData').value;
    console.log(this.reserva)

    this.reservaService.realizarReserva(this.reserva).subscribe((data) => {this.reserva = data}, (err) => { console.log(err)});
  }

}
