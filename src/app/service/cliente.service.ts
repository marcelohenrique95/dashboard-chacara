import { Observable } from 'rxjs/Observable';
import { Orcamento } from './../model/orcamento';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClienteService {

    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    public realizarOrcamento(usuarioAdm: Orcamento): Observable<Orcamento> {
        return this.http.post<Orcamento>(`${environment.url.orcamentoUrl}`, JSON.stringify(usuarioAdm), this.httpOptions);
    }

    public listaUsuarioAdm(): Observable<Orcamento> {
        return this.http.get<Orcamento>(`${environment.url.orcamentoUrl}` +'/listar');
    }

    public buscaUsuarioAdmPorId(id: number): Observable<Orcamento> {
        return this.http.get<Orcamento>(`${environment.url.orcamentoUrl}` + '/' + id);
    }

}
