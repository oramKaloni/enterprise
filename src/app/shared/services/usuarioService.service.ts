import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { Usuario } from '../models/usuario';
import { GlobalUrl } from './globalUrl';
import { FuntionsGLobales } from './funtionsGlobales';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url = GlobalUrl.url;
  public logueado: boolean;
  public Usuario: Usuario;
  public token: String;

  constructor(private _http: HttpClient,
    private _funtionsGLobales: FuntionsGLobales) { }

  // getById(id) {
  //   let headers = new HttpHeaders();
  //   const slide = 'login/id/' + id;
  //   return this._http.get(this.url + slide, { headers });

  // }
  // getByClv(clv) {
  //   let headers = new HttpHeaders();
  //   const slide = 'login/clv/' + clv;
  //   return this._http.get(this.url + slide, { headers });

  // }

  create(usuario) {
    return this._http.post(`${this.url}/`, usuario);
  }
//   update(empleado) {
//       return this._http.put(`${this.url}login/actualizar/${empleado.idEmpleado}`, empleado);
//   }
 login(usuario) {
    return this._http.post(`${this.url}usuarios/login/`, usuario);
}
getToken(usuario) {

  return this._http.post(`${this.url}usuarios/getToken/`, usuario);
}



}
