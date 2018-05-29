import { DTOfoto } from "./DTOfoto";
import { DTOcomplemento } from "./DTOcomplemento";
import { DTOtarifa } from "./DTOtarifa";

export class DTOHabitaciontipo {
    HTIid : number;
    HTIdescripcion : string;
    HTIcantPersonasMax : number;
    HTItarifas : Array<DTOtarifa>;
    // HTItarifaAdicional : number;
    //HTIfoto : string; 
    HTIfotos : Array<DTOfoto>;
    //HTIentretenimiento : Array<DTOentretenimiento>;
    HTIcomplemento : Array<DTOcomplemento>;
}

export class DTOhabitaciones {
    HTIid : number;
    HTIdescripcion: string;
    HTIfoto: string;
    HTItarifaMin: number;
}