export class Venta {
    constructor(
        public id: number,
        public pais: string,
        public tipo: string,
        public anio: string,
        public mes: string,
        public cantidad: number,
        public fechaCreate: string,
        public fechaUpdate: string,
        public activo: Boolean

    ) { }
}
