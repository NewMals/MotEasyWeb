import { DTOfoto } from "./DTOfoto";
import { DTOcomplemento } from "./DTOcomplemento";
import { DTOtarifa } from "./DTOtarifa";

export class DTOHabitacionTipo {
    HTIid : string;
    HTInombre : string;
    HTIdescripcion : string;
    HTIcantPersonasMax : number;
    HTItarifas : Array<DTOtarifa>;
    HTIfotos : Array<DTOfoto>;
    //HTIentretenimiento : Array<DTOentretenimiento>;
    HTIestado: HTIenumEstado;
    HTIcomplemento : Array<DTOcomplemento>;
    HTIcantidad: number;
    HTIhabitaciones?: Array<DTOHabitacionItem>;
}

export class DTOHabitacionView {
    HVIid : string;
    HVInombre: string;
    HVIdescripcion: string;
    HVIfoto: string;
    HVItarifaMin: number;
}

export class DTOHabitacionItem {
    HITid: string;
    HITidentidad: string; 
    HITestado: string;
    HITtiempo?: Date;
    HITtarifa?: number;
}

export class DTOHabitacionGestion {
    HGEid : string;
    HGEhabitacion: string;
    HGEfechaInicio: Date;
    HGEfechaFin: Date;
}

export enum HTIenumEstado {
    Registrando = "REG"
    , Sincronizado = "SIC"
    , Administrado = "ADM"
}