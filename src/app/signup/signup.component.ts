import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Usuario } from '../shared/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/services/usuarioService.service';
import { FuntionsGLobales } from '../shared/services/funtionsGlobales';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public status: string;
    public usuario: Usuario;
    public message: string;
    public token: any;
    public statusValidate: number;
    public sessionDisplay: Boolean = false;
    public error: any;
    public res: any;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _usuarioService: UsuarioService,
        // private _authGuard: AuthGuardService,
        private _funtionsGLobales: FuntionsGLobales
    ) {}

    ngOnInit() {}
    onSubmit(form): any {
        this._usuarioService.login(form.value).subscribe(
            res => {
                this.res = res;
                if (this.res.error) {
                    this.sessionDisplay = true;
                    this.status = 'failed';
                } else {


                }
            },
            err => {
                this.status = 'failed';
            }
        );
    }
}
