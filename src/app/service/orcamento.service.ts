import { Observable } from 'rxjs/Observable';
import { Orcamento } from './../model/orcamento';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrcamentoService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain' }),
    'responseType': 'text'
  };

  public realizarOrcamento(orcamento: Orcamento): Observable<any> {
    return this.http.get(`${environment.url.orcamentoUrl}`
      + '/' + orcamento.dia + '/' + orcamento.tipoEvento + '/' + orcamento.convidados + '/' + orcamento.cupom, { responseType: 'text' })
  }
}

