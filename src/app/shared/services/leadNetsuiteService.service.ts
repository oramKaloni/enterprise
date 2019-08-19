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
export class LeadNetsuiteService {
    public url = GlobalUrl.url;
    public logueado: boolean;
    public lead: Lead;
    constructor(private _http: HttpClient, private _funtionsGLobales: FuntionsGLobales) {}
    getLeads() {
        return this._http.get(`${this.url}leadsNetsuite/`);
    }

}
