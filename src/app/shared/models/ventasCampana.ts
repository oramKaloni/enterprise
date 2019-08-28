export class VentaCampana {
    constructor(
        public id: number,
        public pais: string,
        public campana: string,
        public anio: string,
        public mes: string,
        public cantidad: number,
        public fechaCreate: string,
        public fechaUpdate: string,
        public activo: Boolean

    ) { }
}
