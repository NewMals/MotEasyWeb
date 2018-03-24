import { DTOfoto } from "./DTOfoto";
import { DTOposicion } from "./DTOposicion";

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
