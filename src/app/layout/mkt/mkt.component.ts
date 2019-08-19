import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LeadService } from '../../shared/services/leadService.service';
import { Lead } from '../../shared/models/lead';
import { FuntionsGLobales } from '../../shared/services/funtionsGlobales';
import { LeadNetsuiteService } from '../../shared/services/leadNetsuiteService.service';
import { LeadNetsuite } from '../../shared/models/leadNetsuite';
import { VentasService } from '../../shared/services/ventasService.service';

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

    public mx: string;

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // Doughnut

    // FF6384   36A2EB   FFCE56   18c73f

    public doughnutChartLabels: string[] = ['2016', '2017', '2018', '2019'];
    public doughnutChartData: any;
    public doughnutChartType: string;

    public datahairbyYearLabels: string[] = ['2016', '2017', '2018', '2019'];
    public datahairbyYear: any;
    public datahairbyYearType: string;

    public dataMedicalbyYearLabels: string[] = ['2016', '2017', '2018', '2019'];
    public dataMedicalbyYear: any;
    public dataMedicalbyYearType: string;

    public dataProductobyYearLabels: string[] = ['2016', '2017', '2018', '2019'];
    public dataProductobyYear:  any;
    public dataProductobyYearType: string;
    public data: any;
    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    constructor(
        private _funtionsGlobales: FuntionsGLobales,
        private _leadService: LeadService,
        private _leadNetsuiteService: LeadNetsuiteService,
        private _ventas: VentasService
    ) {
        this.data = {
            labels: ['A', 'B', 'C', 'D'],
            datasets: [
                {
                    data: [300, 50, 100, 400],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };
        this.doughnutChartData = {
            labels: ['a', 'a', 'a', 'a'],
            datasets: [
                {
                    data: [1, 2, 30, 43],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };

        this.dataProductobyYear = {
            labels: ['a', 'a', 'a', 'a'],
            datasets: [
                {
                    data: [1, 2, 30, 43],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };
        this.dataMedicalbyYear = {
            labels: ['a', 'a', 'a', 'a'],
            datasets: [
                {
                    data: [1, 2, 30, 43],
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

    ngOnInit() {

        // this.dataProductobyYearType = 'doughnut';
        this._ventas.getVentas().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                if (res[i].tipo === 'hair') {
                    if (res[i].anio === 2016) {
                        this.numbersH.push(res[i].cantidad);
                        this.totalHair16 = this.totalHair16 + res[i].cantidad;
                        this.data16 = this.data16 + res[i].cantidad;
                    }
                    if (res[i].anio === 2017) {
                        this.numbers2H.push(res[i].cantidad);
                        this.data17 = this.data17 + res[i].cantidad;
                        this.totalHair17 = this.totalHair17 + res[i].cantidad;
                    }
                    if (res[i].anio === 2018) {
                        this.numbers3H.push(res[i].cantidad);
                        this.data18 = this.data18 + res[i].cantidad;
                        this.totalHair18 = this.totalHair18 + res[i].cantidad;
                    }
                    if (res[i].anio === 2019) {
                        this.numbers4H.push(res[i].cantidad);
                        this.data19 = this.data19 + res[i].cantidad;
                        this.totalHair19 = this.totalHair19 + res[i].cantidad;
                    }
                }
                if (res[i].tipo === 'medical') {
                    if (res[i].anio === 2016) {
                        this.numbersM.push(res[i].cantidad);
                        this.data16 = this.data16 + res[i].cantidad;
                        this.totalmedical16 = this.totalmedical16 + res[i].cantidad;
                    }
                    if (res[i].anio === 2017) {
                        this.numbers2M.push(res[i].cantidad);
                        this.data17 = this.data17 + res[i].cantidad;
                        this.totalmedical17 = this.totalmedical17 + res[i].cantidad;
                    }
                    if (res[i].anio === 2018) {
                        this.numbers3M.push(res[i].cantidad);
                        this.data18 = this.data18 + res[i].cantidad;
                        this.totalmedical18 = this.totalmedical18 + res[i].cantidad;
                    }
                    if (res[i].anio === 2019) {
                        this.numbers4M.push(res[i].cantidad);
                        this.data19 = this.data19 + res[i].cantidad;
                        this.totalmedical19 = this.totalmedical19 + res[i].cantidad;
                    }
                }
                if (res[i].tipo === 'producto') {
                    if (res[i].anio === 2016) {
                        this.numbersP.push(res[i].cantidad);
                        this.data16 = this.data16 + res[i].cantidad;
                        // this.doughnutChartData.push(this.data16);
                        this.totalProducto16 = this.totalProducto16 + res[i].cantidad;
                    }
                    if (res[i].anio === 2017) {
                        this.numbers2P.push(res[i].cantidad);
                        this.data17 = this.data17 + res[i].cantidad;
                        // this.doughnutChartData.push(this.data17);
                        this.totalProducto17 = this.totalProducto17 + res[i].cantidad;
                    }
                    if (res[i].anio === 2018) {
                        this.numbers3P.push(res[i].cantidad);
                        this.data18 = this.data18 + res[i].cantidad;
                        // this.doughnutChartData.push(this.data18);
                        this.totalProducto18 = this.totalProducto18 + res[i].cantidad;
                    }
                    if (res[i].anio === 2019) {
                        this.numbers4P.push(res[i].cantidad);
                        this.data19 = this.data19 + res[i].cantidad;
                        // this.doughnutChartData.push(this.data19);
                        this.totalProducto19 = this.totalProducto19 + res[i].cantidad;
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

            // this.doughnutChartLabels = ['2016', '2017', '2018', '2019'];

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

            // this.doughnutChartData = [this.data16, this.data17, this.data18, this.data19];
            // this.datahairbyYear = [this.totalHair16, this.totalHair17, this.totalHair18, this.totalHair19];]
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
        });
        // this.actualizarLeads() ;
    }
    showDialog() {
        this.display = true;
    }
    actualizarLeads() {}
}
