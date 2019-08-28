import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Filtro } from '../../shared/models/filtro';
import { Venta } from '../../shared/models/ventas';
import { VentaCampana } from '../../shared/models/ventasCampana';
import { VentasService } from '../../shared/services/ventasService.service';
import { VentasCampanaService } from '../../shared/services/ventasCampanaService.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-compare',
    templateUrl: './compare.component.html',
    animations: [routerTransition()]
})
export class CompareComponent implements OnInit {
    // bar chart

    public filtro1: Filtro;
    public filtro2: Filtro;
    public venta: Venta;
    public ventas: Venta[];
    public ventasLA = 0;
    public ventasLB = 0;
    public ventasLC = 0;
    public ventasL1A = 0;
    public ventasL1B = 0;
    public ventasL1C = 0;
    public ventasL2A = 0;
    public ventasL2B = 0;
    public ventasL2C = 0;

    public ventaCampana: VentaCampana;
    public ventasCampana: VentaCampana[];
    compare1: any;
    compare2: any;
    real3m: any;
    ultimo3: any;
    pie1: any;
    pie2: any;
    pie3: any;
    public fecha: any;
    public mesCurso: any;
    public anioCurso: any;
    public mes1: any;
    public mes2: any;
    public mes3: any;


    public com1 = [];
    public com2 = [];

    constructor(
        private _ventasService: VentasService,
        private _ventasCampanaService: VentasCampanaService,
        private messageService: MessageService
    ) {
        this.filtro1 = new Filtro('', '', '', '', '', '', true);
        this.filtro2 = new Filtro('', '', '', '', '', '', true);

        this.compare1 = {
            labels: ['Hair', 'Product', 'Medical'],
            datasets: [
                {
                    data: [0, 0, 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };
        this.compare2 = {
            labels: ['Hair', 'Product', 'Medical'],
            datasets: [
                {
                    data: [0, 0, 0, 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                }
            ]
        };
        this.pie1 = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#FF6384', '#36A2EB', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#18c73f']
                }
            ]
        };
        this.pie2 = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#FF6384', '#36A2EB', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#18c73f']
                }
            ]
        };
        this.pie3 = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#FF6384', '#36A2EB', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#18c73f']
                }
            ]
        };
        this.ultimo3 = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    label: 'Este mes',
                    data: [],
                    fill: false,
                    borderColor: '#FF6384'
                },
                {
                    label: 'El mes pasado',
                    data: [],
                    fill: false,
                    borderColor: '#36A2EB'
                },
                {
                    label: '2 meses antes',
                    data: [],
                    fill: false,
                    borderColor: '#18c73f'
                }
            ]
        };

        this.real3m = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    label: 'Este mes',
                    data: [],
                    fill: false,
                    borderColor: '#FF6384'
                },
                {
                    label: 'El mes pasado',
                    data: [],
                    fill: false,
                    borderColor: '#36A2EB'
                },
                {
                    label: 'Mismo mes hace un año',
                    data: [],
                    fill: false,
                    borderColor: '#18c73f'
                }
            ]
        };
    }

    ngOnInit() {
        this.fecha = new Date();
        this.mesCurso = this.fecha.getMonth() + 1;
        this.anioCurso = this.fecha.getFullYear();
        // console.log(this.mesCurso);
        // console.log(this.anioCurso);
    }
    selectData(event) {
        this.messageService.add({
            severity: 'info',
            summary: 'Data Selected',
            detail: this.data.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }
    compare(filtro1, filtro2) {
        this._ventasService.getVentasCompare(filtro1.pais, filtro1.anio, filtro1.mes).subscribe(
            res1 => {
                // console.log(res1);

                for (let i = 0; i < res1.length; i++) {
                    this.com1.push(res1[i].cantidad);
                }
                // console.log(this.com1);
                this.compare1 = {
                    labels: ['Hair', 'Product', 'Medical'],
                    datasets: [
                        {
                            data: this.com1,
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                        }
                    ]
                };

                // console.log(this.compare1);
                this._ventasService.getVentasCompare(filtro2.pais, filtro2.anio, filtro2.mes).subscribe(
                    res2 => {
                        // console.log(res2);
                        for (let i = 0; i < res2.length; i++) {
                            this.com2.push(res2[i].cantidad);
                        }
                        // console.log(this.com2);
                        this.compare2 = {
                            labels: ['Hair', 'Product', 'Medical'],
                            datasets: [
                                {
                                    data: this.com2,
                                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                    // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f'],
                                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                                    // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#18c73f']
                                }
                            ]
                        };
                        // console.log(this.compare2);
                    },
                    err => {
                        console.log(<any>err);
                    }
                );
            },
            err => {
                console.log(<any>err);
            }
        );

        this.filtro1.activo = false;
        this.filtro2.activo = false;
    }

    real3meses(pais) {
        this.lipiarVariables();
        this.compareAgain();
        this.mes1 = this.getMes(this.mesCurso);
        console.log(this.mes1);
        this._ventasService.getVentasCompare(pais, this.anioCurso, this.mesCurso).subscribe(
            res => {
                for (let i = 0; i < res.length; i++) {
                    // console.log(res[i]);
                    if (res[i].tipo === 'hair') {
                        this.ventasLA = res[i].cantidad;
                    }
                    if (res[i].tipo === 'medical') {
                        this.ventasLB = res[i].cantidad;
                    }
                    if (res[i].tipo === 'producto') {
                        this.ventasLC = res[i].cantidad;
                    }
                }

                const mesMenosUno = this.mesCurso - 1;
                this.mes2 = this.getMes(mesMenosUno);
                this._ventasService.getVentasCompare(pais, this.anioCurso, mesMenosUno).subscribe(
                    res2 => {
                        // console.log(res2);
                        for (let i = 0; i < res2.length; i++) {
                            // console.log(res2[i]);
                            if (res2[i].tipo === 'hair') {
                                this.ventasL1A = res2[i].cantidad;
                            }
                            if (res2[i].tipo === 'medical') {
                                this.ventasL1B = res2[i].cantidad;
                            }
                            if (res2[i].tipo === 'producto') {
                                this.ventasL1C = res2[i].cantidad;
                            }
                        }
                        const anioMenosUno = this.anioCurso - 1;
                        // console.log(anioMenosUno);

                        this._ventasService.getVentasCompare(pais, anioMenosUno, this.mesCurso).subscribe(
                            res3 => {
                                // console.log(res3);
                                for (let i = 0; i < res3.length; i++) {
                                    // console.log(res3[i]);
                                    if (res3[i].tipo === 'hair') {
                                        // alert('hair' + res3[i].cantidad);
                                        this.ventasL2A = res3[i].cantidad;
                                    }
                                    if (res3[i].tipo === 'medical') {
                                        // alert('medical' + res3[i].cantidad);
                                        this.ventasL2B = res3[i].cantidad;
                                    }
                                    if (res3[i].tipo === 'producto') {
                                        // alert('producto' + res3[i].cantidad);
                                        // console.log(res3[i]);
                                        this.ventasL2C = res3[i].cantidad;
                                    }
                                }

                                this.real3m = {
                                    labels: ['Hair', 'Medical', 'Products'],
                                    datasets: [
                                        {
                                            label: 'Este mes',
                                            data: [this.ventasLA, this.ventasLB, this.ventasLC],
                                            fill: false,
                                            borderColor: '#FF6384'
                                        },
                                        {
                                            label: 'Hace 1 mes',
                                            data: [this.ventasL1A, this.ventasL1B, this.ventasL1C],
                                            fill: false,
                                            borderColor: '#36A2EB'
                                        },
                                        {
                                            label: 'Hace 2 meses',
                                            data: [this.ventasL2A, this.ventasL2B, this.ventasL2C],
                                            fill: false,
                                            borderColor: '#18c73f'
                                        }
                                    ]
                                };
                                this.llenarPie();
                            },
                            err => {
                                console.log(<any>err);
                            }
                        );
                    },
                    err => {
                        console.log(<any>err);
                    }
                );
            },
            err => {
                console.log(<any>err);
            }
        );
    }

    ultimo3mestre(pais) {
        this.lipiarVariables();
        this.compareAgain();
        // console.log(filtro);


        this.mes1 = this.getMes(this.mesCurso);
        console.log(this.mes1);
        this._ventasService.getVentasCompare(pais, this.anioCurso, this.mesCurso).subscribe(res => {
            //  console.log(res);
            for (let i = 0; i < res.length; i++) {
                // console.log(res[i]);
                if (res[i].tipo === 'hair') {
                    // console.log('hair   ' + res[i].cantidad);
                    this.ventasLA = res[i].cantidad;
                }
                if (res[i].tipo === 'medical') {
                    // console.log('medical   ' + res[i].cantidad);
                    this.ventasLB = res[i].cantidad;
                }
                if (res[i].tipo === 'producto') {
                    // console.log('producto   ' + res[i].cantidad);
                    this.ventasLC = res[i].cantidad;
                }
            }
            const mesMenosUno = this.mesCurso - 1;
            this.mes2 = this.getMes(mesMenosUno);
            console.log(this.mes2);
            // console.log(mesMenosUno);

            this._ventasService.getVentasCompare(pais, this.anioCurso, mesMenosUno).subscribe(res2 => {
                // console.log(res2);
                for (let i = 0; i < res2.length; i++) {
                    // console.log(res2[i]);
                    if (res2[i].tipo === 'hair') {
                        // console.log('hair   ' + res2[i].cantidad);
                        this.ventasL1A = res2[i].cantidad;
                    }
                    if (res2[i].tipo === 'medical') {
                        // console.log('medical   ' + res2[i].cantidad);
                        this.ventasL1B = res2[i].cantidad;
                    }
                    if (res2[i].tipo === 'producto') {
                        // console.log('producto   ' + res2[i].cantidad);
                        this.ventasL1C = res2[i].cantidad;
                    }
                }
                const mesMenosDos = this.mesCurso - 2;
                this.mes3 = this.getMes(mesMenosDos);
            console.log(this.mes3);
                // console.log(mesMenosDos);
                this._ventasService.getVentasCompare(pais, this.anioCurso, mesMenosDos).subscribe(res3 => {
                    console.log(res3);
                    for (let i = 0; i < res3.length; i++) {
                        // console.log(res3[i]);
                        if (res3[i].tipo === 'hair') {
                            // console.log('hair   ' + res3[i].cantidad);
                            // alert('hair' + res3[i].cantidad);
                            this.ventasL2A = res3[i].cantidad;
                            // console.log(this.ventasL2A);
                        }
                        if (res3[i].tipo === 'medical') {
                            // console.log('medical   ' + res3[i].cantidad);
                            // alert('medical' + res3[i].cantidad);
                            this.ventasL2B = res3[i].cantidad;
                            // console.log(this.ventasL2B);
                        }
                        if (res3[i].tipo === 'producto') {
                            // console.log('producto   ' + res3[i].cantidad);
                            // alert('producto' + res3[i].cantidad);
                            // console.log(res3[i]);
                            this.ventasL2C = res3[i].cantidad;
                            // console.log(this.ventasL2C);
                        }
                    }
                    this.ultimo3 = {
                        labels: ['Hair', 'Medical', 'Products'],
                        datasets: [
                            {
                                label: 'Este mes',
                                data: [this.ventasLA, this.ventasLB, this.ventasLC],
                                fill: false,
                                borderColor: '#FF6384'
                            },
                            {
                                label: 'Hace 1 mes',
                                data: [this.ventasL1A, this.ventasL1B, this.ventasL1C],
                                fill: false,
                                borderColor: '#36A2EB'
                            },
                            {
                                label: 'Hace 2 meses',
                                data: [this.ventasL2A, this.ventasL2B, this.ventasL2C],
                                fill: false,
                                borderColor: '#18c73f'
                            }
                        ]
                    };
                    this.llenarPie();
                });
            });
        });
    }
    lipiarVariables() {
        this.ventasLA = 0;
        this.ventasLB = 0;
        this.ventasLC = 0;
        this.ventasL1A = 0;
        this.ventasL1B = 0;
        this.ventasL1C = 0;
        this.ventasL2A = 0;
        this.ventasL2B = 0;
        this.ventasL2C = 0;
        this.com1 = [];
        this.com2 = [];

        this.filtro1.activo = true;
        this.filtro2.anio = '';
        this.filtro2.mes = '';
        this.filtro2.campana = '';
        this.filtro2.medio = '';
        this.filtro2.pais = '';

        this.filtro2.activo = true;
    }
    llenarPie() {
        this.pie1 = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    data: [this.ventasLA, this.ventasLB, this.ventasLC],
                    backgroundColor: ['#FF6384', '#36A2EB', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#18c73f']
                }
            ]
        };
        this.pie2 = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    data: [this.ventasL1A, this.ventasL1B, this.ventasL1C],
                    backgroundColor: ['#FF6384', '#36A2EB', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#18c73f']
                }
            ]
        };
        this.pie3 = {
            labels: ['Hair', 'Medical', 'Products'],
            datasets: [
                {
                    data: [this.ventasL2A, this.ventasL2B, this.ventasL2C],
                    backgroundColor: ['#FF6384', '#36A2EB', '#18c73f'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#18c73f']
                }
            ]
        };
    }
    getMes(mes) {

        console.log(mes);
        switch (mes) {
            case mes = 1: {
                return 'Enero';
                break;
            }
            case mes = 2: {
                return 'Febrero';
                break;
            }
            case mes = 3: {
                return 'Marzo';
                break;
            }
            case mes = 4: {
                return 'Abril';
                break;
            }
            case mes = 5: {
                return 'Mayo';
                break;
            }
            case mes = 6: {
                return 'Junio';
                break;
            }
            case mes = 7: {
                return 'Julio';
                break;
            }
            case mes = 8: {
                return 'Agosto';
                break;
            }
            case mes = 9: {
                return 'Septiembre';
                break;
            }
            case mes = 10: {
                return 'Octubre';
                break;
            }
            case mes = 11: {
                return 'Noviembre';
                break;
            }
            case mes = 12: {
                return 'Diciembre';
                break;
            }

            default: {
               return 'No exite mes';
                break;
            }
        }
    }
    compareAgain() {
        this.com1 = [];
        this.com2 = [];
        this.mes1 = '';
        this.mes2 = '';
        this.mes3 = '';
        this.filtro1.activo = true;
        this.filtro2.anio = '';
        this.filtro2.mes = '';
        this.filtro2.campana = '';
        this.filtro2.medio = '';
        this.filtro2.pais = '';

        this.filtro2.activo = true;
    }
}
