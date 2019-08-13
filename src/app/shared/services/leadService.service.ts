import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { Lead } from '../models/lead';
import { GlobalUrl } from './globalUrl';
import { FuntionsGLobales } from './funtionsGlobales';

@Injectable({
    providedIn: 'root'
})
export class LeadService {
    public url = GlobalUrl.url;
    public logueado: boolean;
    public lead: Lead;
    constructor(private _http: HttpClient, private _funtionsGLobales: FuntionsGLobales) {}
    getLeads() {
        return this._http.get(`${this.url}leads/`);
    }
    getOne(idLead) {
        return this._http.get(`${this.url}leads/`, idLead);
    }
    getByPais(idPais) {
        return this._http.get(`${this.url}leads/byPais/`, idPais);
    }
    getBySucursal(idSucursal) {
        return this._http.get(`${this.url}leads/bySucursal/`, idSucursal);
    }
    getByMes(mes) {
        return this._http.get(`${this.url}leads/byMes/`, mes);
    }
    getByAnio(anio) {
        return this._http.get(`${this.url}leads/byAnio/`, anio);
    }
}
