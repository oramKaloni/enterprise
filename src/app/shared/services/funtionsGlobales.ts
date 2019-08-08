import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuntionsGLobales {

  getLocal(key: any) {
    // const item = localStorage.getItem(key);
    const item = JSON.parse(localStorage.getItem(key));
    return item;
  }

  setLocal(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getSession(key: any) {
    const item = JSON.parse(sessionStorage.getItem(key));
    return item;
  }

  setSession(key: any, value: any) {

    sessionStorage.setItem(key, JSON.stringify(value));
  }
  obtenerClave(tipo, cantidad) {

    const hoy = new Date();
    const yy = hoy.getFullYear();
    const mm = hoy.getMonth() + 1;
    let year = yy.toString();
    year = year.substr(2, 4);
    let mounth = mm.toString();
    if (mounth.length === 1) {
      mounth = '0'  + mounth;
    }
    const clv = tipo;

    const next = 0;
    const rdm = this.ramdom();
    let busqueda: any;

    if (cantidad === 5) {
       busqueda =  clv + '-' + rdm.toUpperCase();

    } else  {
       busqueda = year + mounth + clv + rdm.toUpperCase();
    }


    return busqueda;

  }

  ramdom() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 2; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
