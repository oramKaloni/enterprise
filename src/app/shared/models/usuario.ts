export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public user: string,
        public password: string,
        public clvPais: string,
        public clvSucursal: string,
        public clvRol: string,
        public fechaCreate: string,
        public fechaUpdate: string,
        public lastUser: string,
        public activo: Boolean

    ) { }
}
