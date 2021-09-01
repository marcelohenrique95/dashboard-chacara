import { Cliente } from './../model/cliente';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClienteService {

    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    public registrarCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(`${environment.url.clienteUrl}`, JSON.stringify(cliente), this.httpOptions);
    }

    public listarCliente(): Observable<Cliente> {
        return this.http.get<Cliente>(`${environment.url.clienteUrl}` +'/listar');
    }

    public buscaUsuarioAdmPorId(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${environment.url.orcamentoUrl}` + '/' + id);
    }

}
