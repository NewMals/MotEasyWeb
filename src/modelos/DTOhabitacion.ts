import { DTOfoto } from "./DTOfoto";
import { DTOcomplemento } from "./DTOcomplemento";

export class DTOHabitaciontipo {
    HTIid : number;
    HTIdescripcion : string;
    HTIcantPersonasMax : number;
    // HTItarifaEstandar : number;
    // HTItarifaAdicional : number;
    //HTIfoto : string; 
    HTIfotos : Array<DTOfoto>;
    //HTIentretenimiento : Array<DTOentretenimiento>;
    HTIcomplemento : Array<DTOcomplemento>;
}

