import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Usuario } from '../shared/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/services/usuarioService.service';
import { FuntionsGLobales } from '../shared/services/funtionsGlobales';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public status: string;
    public usuario: Usuario;
    public message: any;
    public token: any;
    public statusValidate: number;
    public sessionDisplay: Boolean = false;
    public error: any;
    public res: any;
    alerts: Array<any> = [];
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _usuarioService: UsuarioService,
        // private _authGuard: AuthGuardService,
        private _funtionsGLobales: FuntionsGLobales
    ) {
        this.usuario = new Usuario(0, '', '', '', '', '', '', '', '', '', '', '', false);
    }

    ngOnInit() {}
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    onSubmit(form): any {
        this._usuarioService.login(form.value).subscribe(
            res => {
                this.res = res;
                console.log(this.res);
                if (this.res.error) {
                    this.sessionDisplay = true;
                    this.status = 'failed';
                } else {
                    this._usuarioService.getToken(form.value).subscribe(
                        // tslint:disable-next-line: no-shadowed-variable
                        res => {
                            this.token = res;
                            console.log(this.token.token);
                            if (this.token.token === false) {
                                this.alerts.push({
                                    id: 1,
                                    type: 'warning',
                                    message: 'Su usuario no se encuentra activo'
                                });
                            } else {
                                this.token = res;
                                this._funtionsGLobales.setLocal('usuario', this.res);
                                this._funtionsGLobales.setSession('token', this.token.token);
                                this._funtionsGLobales.setLocal('isLoggedin', 'true');
                                localStorage.setItem('isLoggedin', 'true');
                                this._router.navigate(['/dashboard']);
                            }
                        },
                        err => {

                            console.log(err);
                        }
                    );
                }
            },
            err => {
                console.log(err.error);
                this.message = err.error ;
                this.alerts.push({
                    id: 1,
                    type: 'warning',
                    message: JSON.stringify(this.message.error)
                });

                this.status = 'failed';
            }
        );
    }
}
