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
    public leads: Lead[];
    constructor(private _funtionsGlobales: FuntionsGLobales, private _leadService: LeadService) {}
    ngOnInit() {
        this._leadService.getLeads().subscribe(res => {
            this.leads = res;
            for (let i = 0; i < this.leads.length; i++) {
                this.leads[i].lead = JSON.parse(this.leads[i].lead);
            }
            console.log(this.leads);
        });
    }
}
