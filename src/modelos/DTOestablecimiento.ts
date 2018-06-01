import { DTOfoto } from "./DTOfoto";
import { DTOposicion } from "./DTOposicion";
import { DTOhabitaciones } from "./DTOhabitacion";

export class DTOEstablecimiento {
    ESTnit : number;
    ESTnombre : string;
    ESTciudad? : number;
    ESTtelefono? : number;
    ESTdireccion? : string;
    ESTfotos? : Array<DTOfoto>;
    ESTlocalidad?: string;
    ESThabitacionesTipos: Array<DTOhabitaciones>;
    ESTgeolocalizacion?: DTOposicion;
    ESTvalorMin?: number;
}
