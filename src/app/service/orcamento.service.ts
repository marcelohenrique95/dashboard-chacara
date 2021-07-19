import { Observable } from 'rxjs/Observable';
import { Orcamento } from './../model/orcamento';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrcamentoService {

    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    public realizarOrcamento(dia: number, evento: number, conv: number): Observable<any> {
        return this.http.post<any>(`${environment.url.orcamentoUrl}` + '/' + dia + '/' + evento + '/' + conv, this.httpOptions);
    }

    public listaUsuarioAdm(): Observable<Orcamento> {
        return this.http.get<Orcamento>(`${environment.url.orcamentoUrl}` +'/listar');
    }

    public buscaUsuarioAdmPorId(id: number): Observable<Orcamento> {
        return this.http.get<Orcamento>(`${environment.url.orcamentoUrl}` + '/' + id);
    }

}
