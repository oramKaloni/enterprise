import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { Venta } from '../models/ventas';
import { GlobalUrl } from './globalUrl';
import { FuntionsGLobales } from './funtionsGlobales';

@Injectable({
    providedIn: 'root'
})
export class VentasService {
    public url = GlobalUrl.url;
    public logueado: boolean;
    public venta: Venta;
    constructor(private _http: HttpClient, private _funtionsGLobales: FuntionsGLobales) {}
    getVentas() {
        return this._http.get(`${this.url}ventas/`);
    }

}
