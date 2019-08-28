import { Component, OnInit, ɵConsole } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LeadService } from '../../shared/services/leadService.service';
import { Lead } from '../../shared/models/lead';
import { FuntionsGLobales } from '../../shared/services/funtionsGlobales';
import { VentasCampanaService } from '../../shared/services/ventasCampanaService.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Venta } from '../../shared/models/ventas';
import { VentaCampana } from '../../shared/models/ventasCampana';
import { Filtro } from '../../shared/models/filtro';

@Component({
    selector: 'app-ventasCampana',
    templateUrl: './ventasCampana.component.html',
    animations: [routerTransition()]
})
export class VentasCampanaComponent implements OnInit {
    public window: any;
    constructor(private _ventasCampanaService: VentasCampanaService) {
        this.window = window.scroll(0, 0);
        this.filtro = new Filtro ('', '', '', '', '' , '', true);
        this.data = {
            anio: 2018,
            labels: ['Facebook', 'Google', 'OFF-LINE', 'Migrados', 'Afiliados', 'Intercambios', 'Interna'],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f', '#6610f2', '#fd7e14', '#20c997']
                    // ,
                    // hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384']
                }
            ]
        };
        this.data2 = {
            anio: 2019,
            labels: ['Facebook', 'Google', 'OFF-LINE', 'Migrados', 'Afiliados', 'Intercambios', 'Interna'],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f', '#6610f2', '#fd7e14', '#20c997']
                    // ,
                    // hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384']
                }
            ]
        };
        this.data3 = {
            anio: 2020,
            labels: ['Facebook', 'Google', 'OFF-LINE', 'Migrados', 'Afiliados', 'Intercambios', 'Interna'],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f', '#6610f2', '#fd7e14', '#20c997']
                    // ,
                    // hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384']
                }
            ]
        };
        this.dataByCampana = {
            campana: '',
            anio: 0,
            cantidad: []
        };
        this.options2019 = {
            title: {
                display: true,
                text: '2019 Mexico',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        this.options2018 = {
            title: {
                display: true,
                text: '2018 Mexico',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }
    public filtro: Filtro;
    public fecha: any;
    public mesCurso: any;
    public anioCurso: any;
    public anios = [];
    public a = 0;
    public hf = [];
    public hg = [];
    public ho = [];
    public hm = [];
    public ha = [];
    public hi = [];
    public hn = [];
    public hf2 = [];
    public hg2 = [];
    public ho2 = [];
    public hm2 = [];
    public ha2 = [];
    public hi2 = [];
    public hn2 = [];
    public hf3 = [];
    public hg3 = [];
    public ho3 = [];
    public hm3 = [];
    public ha3 = [];
    public hi3 = [];
    public hn3 = [];
    public j = [];
    public k = [];
    public l = [];
    public thf = 0;
    public thg = 0;
    public tho = 0;
    public thm = 0;
    public tha = 0;
    public thi = 0;
    public thfv = [];
    public thgv = [];
    public thov = [];
    public thmv = [];
    public thav = [];
    public thiv = [];
    public thnv = [];
    public thn = [];
    public thfma = 0;
    public thgma = 0;
    public thoma = 0;
    public thmma = 0;
    public thama = 0;
    public thima = 0;
    public thnma = [];
    public thf2 = 0;
    public thg2 = 0;
    public tho2 = 0;
    public thm2 = 0;
    public tha2 = 0;
    public thi2 = 0;
    public thn2 = [];
    public thf3 = 0;
    public thg3 = 0;
    public tho3 = 0;
    public thm3 = 0;
    public tha3 = 0;
    public thi3 = 0;
    public thn3 = [];
    datas = [];
    data: any;
    data2: any;
    data3: any;

    dataByCampana: any;
    public dataMont = [];
    dataN = [];
    data2018 = [];
    data2019 = [];
    data2020 = [];
    data2018V: any;
    options2018: any;
    data2019V: any;
    options2019: any;
    data2020V: any;
    options2020: any;

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
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string;

    // Radar
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string;

    // Pie
    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string;

    // PolarArea
    public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean;

    public polarAreaChartType: string;

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;

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

    ngOnInit() {
        this.window = window.scroll(0, 0);
        this.fecha = new Date();
        this.mesCurso = this.fecha.getMonth() + 1;
        this.anioCurso = this.fecha.getFullYear();
        this.filtro.pais = 'Mx';
        this.selectPais('Mx');
        for (let i = 2018; i <= this.anioCurso; i++) {
            this.anios.push(i);
        }
    }
    selectPais(p) {
        let pais;
        if (p === 'Mx') {
            pais = 'Mx';
        } else {
          pais = this.filtro.pais;
        }
        this.hf = [];
        this.hg = [];
        this.ho = [];
        this.hm = [];
        this.ha = [];
        this.hi = [];
        this.hn = [];
        this.hf2 = [];
        this.hg2 = [];
        this.ho2 = [];
        this.hm2 = [];
        this.ha2 = [];
        this.hi2 = [];
        this.hn2 = [];
        this.hf3 = [];
        this.hg3 = [];
        this.ho3 = [];
        this.hm3 = [];
        this.ha3 = [];
        this.hi3 = [];
        this.hn3 = [];
        this.j = [];
        this.k = [];
        this.l = [];
        this.thf = 0;
        this.thg = 0;
        this.tho = 0;
        this.thm = 0;
        this.tha = 0;
        this.thi = 0;
        this.thn = [];
        this.thfma = 0;
        this.thgma = 0;
        this.thoma = 0;
        this.thmma = 0;
        this.thama = 0;
        this.thima = 0;
        this.thnma = [];
        this.thf2 = 0;
        this.thg2 = 0;
        this.tho2 = 0;
        this.thm2 = 0;
        this.tha2 = 0;
        this.thi2 = 0;
        this.thn2 = [];
        this.thf3 = 0;
        this.thg3 = 0;
        this.tho3 = 0;
        this.thm3 = 0;
        this.tha3 = 0;
        this.thi3 = 0;
        this.thn3 = [];
        this.thfv = [];
        this.thgv = [];
        this.thov = [];
        this.thmv = [];
        this.thav = [];
        this.thiv = [];
        this.thnv = [];

        this.data2018V = null;

        this._ventasCampanaService.getVentas().subscribe(res => {

            for (let i = 0; i < res.length; i++) {
                this.data2019V = {
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
                            label: 'Facebook',
                            data: [],
                            backgroundColor: 'rgba(0, 0, 0, 0.01)',
                            borderColor: '#FF6384'
                        }
                    ]
                };
                this.data2019V.datasets.push({
                    label: 'Google',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#36A2EB'
                });
                this.data2019V.datasets.push({
                    label: 'OFF-LINE',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#FFCE56'
                });
                this.data2019V.datasets.push({
                    label: 'Migrados',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#18c73f'
                });
                this.data2019V.datasets.push({
                    label: 'Afiliados',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#6610f2'
                });
                this.data2019V.datasets.push({
                    label: 'Intercambios',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#fd7e14'
                });
                this.data2019V.datasets.push({
                    label: 'Interna',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#20c997'

                });

                this.data2018V = {
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
                            label: 'Facebook',
                            data: [],
                            backgroundColor: 'rgba(0, 0, 0, 0.01)',
                            borderColor: '#FF6384'
                        }
                    ]
                };
                this.data2018V.datasets.push({
                    label: 'Google',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#36A2EB'
                });
                this.data2018V.datasets.push({
                    label: 'OFF-LINE',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#FFCE56'
                });
                this.data2018V.datasets.push({
                    label: 'Migrados',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#18c73f'
                });
                this.data2018V.datasets.push({
                    label: 'Afiliados',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#6610f2'
                });
                this.data2018V.datasets.push({
                    label: 'Intercambios',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#fd7e14'
                });
                this.data2018V.datasets.push({
                    label: 'Interna',
                    data: [],
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    borderColor: '#20c997'
                });
                if (res[i].anio === 2018) {
                    if (res[i].pais === pais) {
                        if (res[i].campana === 'Facebook') {
                            if (this.hf.length < 12) {
                                if (this.hf.length < this.mesCurso) {
                                    this.thfma = this.thfma + res[i].cantidad;
                                    this.thfv.push(res[i].cantidad);
                                }
                                this.hf.push(res[i].cantidad);
                                this.thf = this.thf + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Google') {
                            if (this.hg.length < 12) {
                                if (this.hg.length < this.mesCurso) {
                                    this.thgma = this.thgma + res[i].cantidad;
                                    this.thgv.push(res[i].cantidad);
                                }
                                this.hg.push(res[i].cantidad);
                                this.thg = this.thg + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'OFF-LINE') {
                            if (this.ho.length < 12) {
                                if (this.ho.length < this.mesCurso) {
                                    this.thoma = this.thoma + res[i].cantidad;
                                    this.thov.push(res[i].cantidad);
                                }
                                this.ho.push(res[i].cantidad);
                                this.tho = this.tho + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Migrados') {
                            if (this.hm.length < 12) {
                                if (this.hm.length < this.mesCurso) {
                                    this.thmma = this.thmma + res[i].cantidad;
                                    this.thmv.push(res[i].cantidad);
                                }
                                this.hm.push(res[i].cantidad);
                                this.thm = this.thm + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Afiliados') {
                            if (this.ha.length < 12) {
                                if (this.ha.length < this.mesCurso) {
                                    this.thama = this.thama + res[i].cantidad;
                                    this.thav.push(res[i].cantidad);
                                }
                                this.ha.push(res[i].cantidad);
                                this.tha = this.tha + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Intercambios') {
                            if (this.hi.length < 12) {
                                if (this.hi.length < this.mesCurso) {
                                    this.thima = this.thima + res[i].cantidad;
                                    this.thiv.push(res[i].cantidad);
                                }
                                this.hi.push(res[i].cantidad);
                                this.thi = this.thi + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Interna') {
                            if (this.hn.length < 12) {
                                if (this.hn.length < this.mesCurso) {
                                    this.thnma = this.thnma + res[i].cantidad;

                                    this.thnv.push(res[i].cantidad);
                                    // console.log(i);
                                    //  console.log(this.thnv);
                                    // console.log(this.thnv);
                                }
                                if (res[i].cantidad !== 0) {
                                    this.hn.push(res[i].cantidad);
                                    this.thn = this.thn + res[i].cantidad;
                                }
                            }
                        }
                    }

                    this.data = {
                        labels: ['Facebook', 'Google', 'OFF-LINE', 'Migrados', 'Afiliados', 'Intercambios', 'Interna'],
                        datasets: [
                            {
                                data: [this.thf, this.thg, this.tho, this.thm, this.tha, this.thi, this.thn],
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f', '#6610f2', '#fd7e14', '#20c997']
                                // ,
                                // hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384']
                            }
                        ]
                    };
                }
                if (res[i].anio === 2019) {
                    if (res[i].pais === pais) {
                        if (res[i].campana === 'Facebook') {
                            if (this.hf2.length < this.mesCurso) {
                                this.hf2.push(res[i].cantidad);
                                this.thf2 = this.thf2 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Google') {
                            if (this.hg2.length < this.mesCurso) {
                                this.hg2.push(res[i].cantidad);
                                this.thg2 = this.thg2 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'OFF-LINE') {
                            if (this.ho2.length < this.mesCurso) {
                                this.ho2.push(res[i].cantidad);
                                this.tho2 = this.tho2 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Migrados') {
                            if (this.hm2.length < this.mesCurso) {
                                this.hm2.push(res[i].cantidad);
                                this.thm2 = this.thm2 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Afiliados') {
                            if (this.ha2.length < this.mesCurso) {
                                this.ha2.push(res[i].cantidad);
                                this.tha2 = this.tha2 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Intercambios') {
                            if (this.hi2.length < this.mesCurso) {
                                this.hi2.push(res[i].cantidad);
                                this.thi2 = this.thi2 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Interna') {
                            if (this.hn2.length < this.mesCurso) {
                                if (this.hn2.length < 12) {
                                    if (res[i].cantidad > 0) {
                                        this.thn2 = this.thn2 + res[i].cantidad;

                                    }
                                    this.hn2.push(res[i].cantidad);
                                    // this.thn2 = this.thn2 + res[i].cantidad;
                                    // console.log(res[i].cantidad);
                                    // console.log(this.hn2);
                                    // console.log(this.thn2);
                                }
                            }
                        }
                    }
                    this.data2 = {
                        labels: ['Facebook', 'Google', 'OFF-LINE', 'Migrados', 'Afiliados', 'Intercambios', 'Interna'],
                        datasets: [
                            {
                                data: [this.thf2, this.thg2, this.tho2, this.thm2, this.tha2, this.thi2, this.thn2],
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f', '#6610f2', '#fd7e14', '#20c997']
                            }
                        ]
                    };
                }
                if (res[i].anio === 2020) {
                    if (res[i].pais === pais) {
                        if (res[i].campana === 'Facebook') {
                            if (this.hf3.length < 12) {
                                this.hf3.push(res[i].cantidad);
                                this.thf3 = this.thf3 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Google') {
                            if (this.hg3.length < 12) {
                                this.hg3.push(res[i].cantidad);
                                this.thg3 = this.thg3 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'OFF-LINE') {
                            if (this.ho3.length < 12) {
                                this.ho3.push(res[i].cantidad);
                                this.tho3 = this.tho3 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Migrados') {
                            if (this.hm3.length < 12) {
                                this.hm3.push(res[i].cantidad);
                                this.thm3 = this.thm3 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Afiliados') {
                            if (this.ha3.length < 12) {
                                this.ha3.push(res[i].cantidad);
                                this.tha3 = this.tha3 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Intercambios') {
                            if (this.hi3.length < 12) {
                                this.hi.push(res[i].cantidad);
                                this.thi3 = this.thi3 + res[i].cantidad;
                            }
                        }
                        if (res[i].campana === 'Interna') {
                            if (this.hn3.length < 12) {
                                this.hn3.push(res[i].cantidad);
                                this.thn3 = this.thn3 + res[i].cantidad;
                            }
                        }
                    }
                    this.data3 = {
                        labels: ['Facebook', 'Google', 'OFF-LINE', 'Migrados', 'Afiliados', 'Intercambios', 'Interna'],
                        datasets: [
                            {
                                data: [this.thf3, this.thg3, this.tho3, this.thm3, this.tha3, this.thi3, this.thn3],
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f', '#6610f2', '#fd7e14', '#20c997']
                            }
                        ]
                    };
                }
            }
            this.data2018V = {
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
                        label: 'Facebook',
                        data: this.hf,
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                        borderColor: '#FF6384'
                    }
                ]
            };
            this.data2018V.datasets.push({
                label: 'Google',
                data: this.hg,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#36A2EB'
            });
            this.data2018V.datasets.push({
                label: 'OFF-LINE',
                data: this.ho,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#FFCE56'
            });
            this.data2018V.datasets.push({
                label: 'Migrados',
                data: this.hm,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#18c73f'
            });
            this.data2018V.datasets.push({
                label: 'Afiliados',
                data: this.ha,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#6610f2'
            });
            this.data2018V.datasets.push({
                label: 'Intercambios',
                data: this.hi,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#fd7e14'
            });
            this.data2018V.datasets.push({
                label: 'Interna',
                data: this.thnv,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#20c997'
            });
            this.data2019V = {
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
                        label: 'Facebook',
                        data: this.thfv,
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                        borderColor: '#FF6384'
                    }
                ]
            };
            this.data2019V.datasets.push({
                label: 'Google',
                data: this.hg2,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#36A2EB'
            });
            this.data2019V.datasets.push({
                label: 'OFF-LINE',
                data: this.thov,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#FFCE56'
            });
            this.data2019V.datasets.push({
                label: 'Migrados',
                data: this.thmv,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#18c73f'
            });
            this.data2019V.datasets.push({
                label: 'Afiliados',
                data: this.thav,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#6610f2'
            });
            this.data2019V.datasets.push({
                label: 'Intercambios',
                data: this.thiv,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#fd7e14'
            });
            this.data2019V.datasets.push({
                label: 'Interna',
                data: this.hn2,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                borderColor: '#20c997'
            });
        });
    }
}
