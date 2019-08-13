export class Lead {
    constructor(
        public id: number,
        public anio: string,
        public mes: string,
        public idPais: string,
        public idSucursal: string,
        public lead: string,
        public fechaCreate: string,
        public fechaUpdate: string,
        public activo: Boolean

    ) { }
}
