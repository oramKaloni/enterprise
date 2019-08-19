import { Component, OnInit } from '@angular/core';
import { FuntionsGLobales } from '../../../../shared/services/funtionsGlobales';
import { LeadService } from '../../../../shared/services/leadService.service';
import { Lead } from '../../../../shared/models/lead';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {
    public today: any;
    public lead: Lead;
    public leads: any;
    public cols: any[];
    public googleN: any[];
    public faceN: any[];
    public offLineN: any[];
    public google: any[];
    public face: any[];
    public offLine: any[];
    public selectedLeads: any[];
    public dt: any;
    public display = false;


    constructor(private _funtionsGlobales: FuntionsGLobales, private _leadService: LeadService) {}
    ngOnInit() {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'anio', header: 'Año' },
            { field: 'mes', header: 'Mes' },
            { field: 'idPais', header: 'Pais' },
            { field: 'idSucursal', header: 'Sucursal' },
            { field: 'fechaCreate', header: 'Creacion' },
            { field: 'fechaUpdate', header: 'Actualizacion' },
            { field: 'activo', header: 'Activo' },
            { field: 'lead', header: 'Leads' }
        ];
        this._leadService.getLeads().subscribe(leads => {
            // console.log(leads);


            this.leads = leads;
            for (let i = 0; i < this.leads.length; i++) {
                this.leads[i].lead = JSON.parse(this.leads[i].lead);
                this.faceN = this.leads[i].lead[0].Facebook;
                this.googleN  = this.leads[i].lead[1].Google;
                this.offLineN = this.leads[i].lead[2].OFFLINE;

                this.face = this.leads[i].lead[0].medios;
                this.google  = this.leads[i].lead[1].medios;
                this.offLine = this.leads[i].lead[2].medios;

            }



        });
    }

    showDialog() {
        this.display = true;
    }
}
