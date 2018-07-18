import { DTOfoto } from "./DTOfoto";
import { DTOposicion } from "./DTOposicion";
import { DTOViewhabitacion } from "./DTOhabitacion";

export class DTOEstablecimiento {
    ESTnit : number;
    ESTnombre : string;
    ESTciudad? : number;
    ESTtelefono? : number;
    ESTdireccion? : string;
    ESTfotos? : Array<DTOfoto>;
    ESTlocalidad?: string;
    ESThabitacionesTipos: Array<DTOViewhabitacion>;
    ESTgeolocalizacion?: DTOposicion;
    ESTvalorMin?: number;
}
