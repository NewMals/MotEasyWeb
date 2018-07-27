import { DTOfoto } from "./DTOfoto";
import { DTOcomplemento } from "./DTOcomplemento";
import { DTOtarifa } from "./DTOtarifa";

export class DTOHabitaciontipo {
    HTIid : string;
    HTInombre : string;
    HTIdescripcion : string;
    HTIcantPersonasMax : number;
    HTItarifas : Array<DTOtarifa>;
    // HTItarifaAdicional : number;
    //HTIfoto : string; 
    HTIfotos : Array<DTOfoto>;
    //HTIentretenimiento : Array<DTOentretenimiento>;
    HTIcomplemento : Array<DTOcomplemento>;
    HTIcantidad: number;
    HTIhabitaciones?: Array<DTOItemhabitacion>;
}

export class DTOViewhabitacion {
    HTIid : string;
    HTIdescripcion: string;
    HTIfoto: string;
    HTItarifaMin: number;
}

export class DTOItemhabitacion {
    HIHid: string;
    HIHidentidad: string; 
    HIHestado: string;
    HIHtiempo?: Date;
    HIHtarifa?: number;
}