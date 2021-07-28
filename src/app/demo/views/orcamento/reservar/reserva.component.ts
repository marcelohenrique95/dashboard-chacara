import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  iptNome: boolean = false;

  iptCel: boolean = false;

  iptCpf: boolean = false;

  iptEvento: boolean = false;

  iptConv: boolean = false;

  iptData: boolean = false;

  constructor(private fb: FormBuilder, private reservaService: ReservaService, private toastr: ToastrService) { }

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

  clear() {
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

   verifyInput() {
    if (this.reservaForm.get('inputNome').value == null || this.reservaForm.get('inputNome').value == undefined || this.reservaForm.get('inputNome').value == '') {
      this.iptNome == true;
    }

    if (this.reservaForm.get('inputCel').value == null || this.reservaForm.get('inputCel').value == undefined || this.reservaForm.get('inputCel').value == '') {
      this.iptCel == true;
    }

    if (this.reservaForm.get('inputCpf').value == null || this.reservaForm.get('inputCpf').value == undefined || this.reservaForm.get('inputCpf').value == '') {
      this.iptCpf == true;
    }

    if (this.reservaForm.get('inputEvento').value == null || this.reservaForm.get('inputEvento').value == undefined || this.reservaForm.get('inputEvento').value == '') {
      this.iptEvento == true;
    }

    if (this.reservaForm.get('inputConv').value == null || this.reservaForm.get('inputConv').value == undefined || this.reservaForm.get('inputConv').value == '') {
      this.iptConv == true;
    }

    if (this.reservaForm.get('inputData').value == null || this.reservaForm.get('inputData').value == undefined || this.reservaForm.get('inputData').value == '') {
      this.iptData == true;
    }
  }

  reservar() {
    this.verifyInput();
    if (
      this.iptNome == true ||
      this.iptCel == true ||
      this.iptConv == true ||
      this.iptEvento == true ||
      this.iptCpf == true ||
      this.iptData == true) {
      return this.toastr.info('Por favor preencha todos os campos.', 'CAMPOS VÁZIOS');
    } 
      this.reserva = new Reserva();
      this.reserva.nome = this.reservaForm.get('inputNome').value;
      this.reserva.celular = this.reservaForm.get('inputCel').value;
      this.reserva.cpf = this.reservaForm.get('inputCpf').value;
      this.reserva.tipoEvento = this.reservaForm.get('inputEvento').value;
      this.reserva.convidados = this.reservaForm.get('inputConv').value;
      this.reserva.diaReserva = this.reservaForm.get('inputData').value;
      console.log(this.reserva)

      this.reservaService.realizarReserva(this.reserva).subscribe(() => { 
        this.toastr.success('Sua reserva foi efetuada!', 'FINALIZADO'); },
         (err) => {
          this.toastr.error('Algo deu errado, tente novamente !', 'ERRO');
        
      });
    }
}
