import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LeadService } from '../../shared/services/leadService.service';
import { Lead } from '../../shared/models/lead';
import { FuntionsGLobales } from '../../shared/services/funtionsGlobales';
import { LeadNetsuiteService } from '../../shared/services/leadNetsuiteService.service';
import { LeadNetsuite } from '../../shared/models/leadNetsuite';
import { VentasService } from '../../shared/services/ventasService.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-mkt',
    templateUrl: './mkt.component.html',
    animations: [routerTransition()]
})
export class MktComponent implements OnInit {
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
    public leadNetsuite: any;
    public countMx = 0;
    public countBr = 0;
    public countDo = 0;
    public countEs = 0;
    public countCo = 0;
    public fechamin = '';
    public fechamax = '';
    data16 = 0;
    data17 = 0;
    data18 = 0;
    data19 = 0;
    dataHair: any;
    totalHair16 = 0;
    totalHair17 = 0;
    totalHair18 = 0;
    totalHair19 = 0;
    dataProducto: any;
    totalProducto16 = 0;
    totalProducto17 = 0;
    totalProducto18 = 0;
    totalProducto19 = 0;
    dataMedical: any;
    totalmedical16 = 0;
    totalmedical17 = 0;
    totalmedical18 = 0;
    totalmedical19 = 0;
    optionsM: any;
    optionsP: any;
    optionsH: any;

    public numbersH = [];
    public numbers2H = [];
    public numbers3H = [];
    public numbers4H = [];
    public numbersM = [];
    public numbers2M = [];
    public numbers3M = [];
    public numbers4M = [];
    public numbersP = [];
    public numbers2P = [];
    public numbers3P = [];
    public numbers4P = [];
    public fecha: any;
    public mesCurso: any;
    public totalMesH = 0;
    public totalMesP = 0;
    public totalMesM = 0;
    public pais: any = 'Mx';

    public mx: string;
    // FF6384   36A2EB   FFCE56   18c73f
    public doughnutChartData: any;
    public datahairbyYear: any;
    public dataMedicalbyYear: any;
    public dataProductobyYear: any;
    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    constructor(
        private _funtionsGlobales: FuntionsGLobales,
        private _leadService: LeadService,
        private _leadNetsuiteService: LeadNetsuiteService,
        private _ventas: VentasService
    ) {
        this.fecha = new Date();
        this.mesCurso = this.fecha.getMonth() + 1;
        this.doughnutChartData = {
            labels: ['2016', '2017', '2018', '2019'],
            datasets: [
                {
                    data: [0, 0, 0, 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };

        this.dataProductobyYear = {
            labels: ['2016', '2017', '2018', '2019'],
            datasets: [
                {
                    data: [0, 0, 0, 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };
        this.dataMedicalbyYear = {
            labels: ['2016', '2017', '2018', '2019'],
            datasets: [
                {
                    data: [0, 0, 0, 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };

        this.optionsH = {
            title: {
                display: true,
                text: 'Ventas Hair',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        this.optionsM = {
            title: {
                display: true,
                text: 'Ventas Medical',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        this.optionsP = {
            title: {
                display: true,
                text: 'Ventas Productos',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }

    ngOnInit() {}
    showDialog() {
        this.display = true;
    }

    selectPais(form) {
        const country: any = document.getElementById('pais').value;
        const ps = country;
        this.data16 = 0;
        this.data17 = 0;
        this.data18 = 0;
        this.data19 = 0;

        this.totalHair16 = 0;
        this.totalHair17 = 0;
        this.totalHair18 = 0;
        this.totalHair19 = 0;

        this.totalProducto16 = 0;
        this.totalProducto17 = 0;
        this.totalProducto18 = 0;
        this.totalProducto19 = 0;

        this.totalmedical16 = 0;
        this.totalmedical17 = 0;
        this.totalmedical18 = 0;
        this.totalmedical19 = 0;
        this.dataHair = null;
        this.dataProducto = null;
        this.dataMedical = null;

        if (ps === 'Global') {
            this._ventas.getVentas().subscribe(res => {
                console.log(res);
            });
        }

        this._ventas.getVentasPais(country).subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                if (res[i].tipo === 'hair') {
                    if (res[i].anio === 2016) {
                        this.numbersH.push(res[i].cantidad);
                        this.totalHair16 = this.totalHair16 + res[i].cantidad;
                    }
                    if (res[i].anio === 2017) {
                        this.numbers2H.push(res[i].cantidad);
                        this.totalHair17 = this.totalHair17 + res[i].cantidad;
                    }
                    if (res[i].anio === 2018) {
                        this.numbers3H.push(res[i].cantidad);
                        this.totalHair18 = this.totalHair18 + res[i].cantidad;
                        if (res[i].mes <= this.mesCurso) {
                            this.totalMesH = this.totalMesH + res[i].cantidad;
                            console.log(this.totalMesH);
                        }
                    }
                    if (res[i].anio === 2019) {
                        if (res[i].mes <= this.mesCurso) {
                            this.totalHair19 = this.totalHair19 + res[i].cantidad;
                        }
                        this.numbers4H.push(res[i].cantidad);

                    }
                }
                if (res[i].tipo === 'medical') {
                    if (res[i].anio === 2016) {
                        this.numbersM.push(res[i].cantidad);
                        this.totalmedical16 = this.totalmedical16 + res[i].cantidad;
                    }
                    if (res[i].anio === 2017) {
                        this.numbers2M.push(res[i].cantidad);
                        this.totalmedical17 = this.totalmedical17 + res[i].cantidad;
                    }
                    if (res[i].anio === 2018) {
                        this.numbers3M.push(res[i].cantidad);
                        this.totalmedical18 = this.totalmedical18 + res[i].cantidad;
                        if (res[i].mes <= this.mesCurso) {
                            this.totalMesM = this.totalMesM + res[i].cantidad;
                        }
                    }
                    if (res[i].anio === 2019) {
                        this.numbers4M.push(res[i].cantidad);
                        if (res[i].mes <= this.mesCurso) {
                            this.totalmedical19 = this.totalmedical19 + res[i].cantidad;
                        }

                    }
                }
                if (res[i].tipo === 'producto') {
                    if (res[i].anio === 2016) {
                        this.numbersP.push(res[i].cantidad);
                        this.totalProducto16 = this.totalProducto16 + res[i].cantidad;
                    }
                    if (res[i].anio === 2017) {
                        this.numbers2P.push(res[i].cantidad);
                        this.totalProducto17 = this.totalProducto17 + res[i].cantidad;
                    }
                    if (res[i].anio === 2018) {
                        this.numbers3P.push(res[i].cantidad);
                        this.totalProducto18 = this.totalProducto18 + res[i].cantidad;
                        if (res[i].mes <= this.mesCurso) {
                            this.totalMesP = this.totalMesP + res[i].cantidad;
                        }
                    }
                    if (res[i].anio === 2019) {
                        this.numbers4P.push(res[i].cantidad);
                        if (res[i].mes <= this.mesCurso) {
                            this.totalProducto19 = this.totalProducto19 + res[i].cantidad;
                        }

                    }
                }
            }

            this.dataHair = {
                labels: [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'
                ],
                datasets: [
                    {
                        label: '2016',
                        data: this.numbersH,
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                        borderColor: '#FF6384'
                    }
                ]
            };
            this.dataHair.datasets.push({
                label: '2017',
                data: this.numbers2H,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#36A2EB'
            });
            this.dataHair.datasets.push({
                label: '2018',
                data: this.numbers3H,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#FFCE56'
            });
            this.dataHair.datasets.push({
                label: '2019',
                data: this.numbers4H,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#18c73f'
            });

            this.dataProducto = {
                labels: [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'
                ],
                datasets: [
                    {
                        label: '2016',
                        data: this.numbersP,
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                        borderColor: '#FF6384'
                    }
                ]
            };
            this.dataProducto.datasets.push({
                label: '2017',
                data: this.numbers2P,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#36A2EB'
            });
            this.dataProducto.datasets.push({
                label: '2018',
                data: this.numbers3P,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#FFCE56'
            });
            this.dataProducto.datasets.push({
                label: '2019',
                data: this.numbers4P,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#18c73f'
            });

            this.dataMedical = {
                labels: [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'
                ],
                datasets: [
                    {
                        label: '2016',
                        data: this.numbersM,
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                        borderColor: '#FF6384'
                    }
                ]
            };

            this.dataMedical.datasets.push({
                label: '2017',
                data: this.numbers2M,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#36A2EB'
            });
            this.dataMedical.datasets.push({
                label: '2018',
                data: this.numbers3M,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#FFCE56'
            });
            this.dataMedical.datasets.push({
                label: '2019',
                data: this.numbers4M,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#18c73f'
            });

            this.data16 = this.totalHair16 + this.totalmedical16 + this.totalProducto16;
            this.data17 = this.totalHair17 + this.totalmedical17 + this.totalProducto17;
            this.data18 = this.totalHair18 + this.totalmedical18 + this.totalProducto18;
            this.data19 = this.totalHair19 + this.totalmedical19 + this.totalProducto19;

            this.doughnutChartData = {
                labels: ['2016', '2017', '2018', '2019'],
                datasets: [
                    {
                        data: [this.data16, this.data17, this.data18, this.data19],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                    }
                ]
            };
            this.datahairbyYear = {
                labels: ['2016', '2017', '2018', '2019'],
                datasets: [
                    {
                        data: [this.totalHair16, this.totalHair17, this.totalHair18, this.totalHair19],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                    }
                ]
            };
            this.dataMedicalbyYear = {
                labels: ['2016', '2017', '2018', '2019'],
                datasets: [
                    {
                        data: [this.totalmedical16, this.totalmedical17, this.totalmedical18, this.totalmedical19],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                    }
                ]
            };

            this.dataProductobyYear = {
                labels: ['2016', '2017', '2018', '2019'],
                datasets: [
                    {
                        data: [this.totalProducto16, this.totalProducto17, this.totalProducto18, this.totalProducto19],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                    }
                ]
            };
            this.numbersH = [];
            this.numbers2H = [];
            this.numbers3H = [];
            this.numbers4H = [];
            this.numbersP = [];
            this.numbers2P = [];
            this.numbers3P = [];
            this.numbers4P = [];
            this.numbersM = [];
            this.numbers2M = [];
            this.numbers3M = [];
            this.numbers4M = [];
        });
    }

    actualizarLeads() {}
}
