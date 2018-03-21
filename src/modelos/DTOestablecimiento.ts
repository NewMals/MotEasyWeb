import { DTOfoto } from "./DTOfoto";

export class DTOEstablecimiento {
    ESTnit : number;
    ESTnombre : string;
    ESTciudad? : number;
    ESTtelefono? : number;
    ESTdireccion? : string;
    ESTfotos? : Array<DTOfoto>;
    ESTlocalidad?: string;
    //ESThabitacionesTipos: Array<DTOHabitaciontipo>;
    ESTgeolocalizacion?: DTOposicion;
    ESTvalorMin?: number;
}

export class DTOposicion {
    latitude: number;
    longitude: number;
}