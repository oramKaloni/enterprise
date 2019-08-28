import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { VentaCampana } from '../models/ventasCampana';
import { GlobalUrl } from './globalUrl';
import { FuntionsGLobales } from './funtionsGlobales';

@Injectable({
    providedIn: 'root'
})
export class VentasCampanaService {
    public url = GlobalUrl.url;
    public logueado: boolean;
    public ventaCampana: VentaCampana;
    constructor(private _http: HttpClient, private _funtionsGLobales: FuntionsGLobales) {}
    getVentas() {
        return this._http.get(`${this.url}ventas-campana/`);
    }
    getVentasCampana(campana) {
        return this._http.get(`${this.url}ventas-campana/${campana}`);
    }

}
