import { Observable } from 'rxjs/Observable';
import { Orcamento } from './../model/orcamento';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable()
export class ReservaService {

    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    public realizarReserva(reserva: Reserva): Observable<any> {
        return this.http.post<any>(`${environment.url.reservaUrl}`,JSON.stringify(reserva), this.httpOptions);
    }

    public listaReservas(): Observable<Reserva> {
        return this.http.get<Reserva>(`${environment.url.reservaUrl}` +'/listReserve');
    }

    public listaFiltroReservas(id: number): Observable<Reserva> {
        return this.http.get<Reserva>(`${environment.url.reservaUrl}` + '/' + id);
    }

}
