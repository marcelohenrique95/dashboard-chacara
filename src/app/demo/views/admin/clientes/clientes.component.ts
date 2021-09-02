import { ToastrService } from 'ngx-toastr';
import { Cliente } from './../../../../model/cliente';
import { ClienteService } from './../../../../service/cliente.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  allClient: Cliente;

  erro: any;

  constructor(private clienteService: ClienteService, private toastr: ToastrService) {
    this.getCliente();
   }

  ngOnInit(): void {
  }

  getCliente(){
    this.clienteService.listarCliente().subscribe(
      (data: Cliente) => {
        this.allClient = data;
      },
      (error: any) => {
        this.erro = error;
        this.toastr.error('Ocorreu um erro inesperado na hora de listar os clientes.');
      }
    )
  }


}
