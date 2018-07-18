import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarTipHabComponent } from '../../../components/configuracion/TiposHabitaciones/registrar/registrar-tip-hab';
import { TarifasComponent } from '../../../components/configuracion/tarifas/tarifas';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
import { DTOHabitaciontipo, DTOViewhabitacion, DTOItemhabitacion } from '../../../modelos/DTOhabitacion';
import { ImagenesComponent } from '../../../components/configuracion/establecimiento/imagenes/imagenes';



/**
 * Generated class for the TiposHabitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipos-habitaciones',
  templateUrl: 'tipos-habitaciones.html',
})
export class TiposHabitacionesPage {

  ArrayConfiguracionHAB = [
    { id: 1, titulo: "Registrar tipo de habitación", iconName: "folder-open", activo: true, component: RegistrarTipHabComponent }
    , { id: 2, titulo: "Tarifas", iconName: "logo-usd", activo: false, component: TarifasComponent }
    , { id: 3, titulo: "Imagenes", iconName: "images", activo: false, component: ImagenesComponent }
  ]

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private TIHservice: HabitacionTipoProvider
    , private ESTservice: EstablecimientoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposHabitacionesPage');
  }

  ionViewDidLeave() {
    let est = this.ESTservice.establecimiento;
    let tipoHab = this.TIHservice.habitacionTipo;
    let hab = new DTOViewhabitacion;

    this.objetoTipoHabitacion(est, tipoHab, hab);

    this.TIHservice.guardarBd();
    this.TIHservice.guardarFb();
    this.ESTservice.guardarBd();
    this.ESTservice.guardarFb();
  }

  objetoTipoHabitacion(est: DTOEstablecimiento, tipoHab: DTOHabitaciontipo, hab: DTOViewhabitacion) {

    hab.HTIdescripcion = tipoHab.HTInombre;
    hab.HTIfoto = (tipoHab.HTIfotos) ? tipoHab.HTIfotos.find(foto => foto.FOTprincipal === true).FOTurl : "";
    hab.HTItarifaMin = 0;

    if(tipoHab.HTIcantidad > 0){
      tipoHab.HTIhabitaciones = this.crearHabitaciones(tipoHab.HTIcantidad);
    }

    tipoHab.HTItarifas.forEach(tar => {
      let valor = tar.TARvalor;
      hab.HTItarifaMin = (valor <= hab.HTItarifaMin || hab.HTItarifaMin == 0) ? valor : hab.HTItarifaMin;
    });

    if (tipoHab.HTIid >= 0) {
      let valor = est.ESThabitacionesTipos.findIndex(index => index.HTIid === tipoHab.HTIid);
      hab.HTIid = tipoHab.HTIid;
      est.ESThabitacionesTipos[valor] = hab;
    } else {
      est.ESThabitacionesTipos = est.ESThabitacionesTipos ? est.ESThabitacionesTipos : new Array<DTOViewhabitacion>();
      hab.HTIid = est.ESThabitacionesTipos ? est.ESThabitacionesTipos.length : 0;
      this.TIHservice.habitacionTipo.HTIid = hab.HTIid;
      est.ESThabitacionesTipos.push(hab);
    }
  }

  crearHabitaciones(cantidadHab: number): Array<DTOItemhabitacion> {
    let ArrayHabitaciones = new Array<DTOItemhabitacion>();
    for(let i = 0; i < cantidadHab; i++){
       let itemHabitacion = new DTOItemhabitacion;
       itemHabitacion.HIHid = Math.random().toString(36).substring(7);
       itemHabitacion.HIHestado = "Disponible";
       itemHabitacion.HIHidentidad = i.toString();

       ArrayHabitaciones.push(itemHabitacion);
    }
    return ArrayHabitaciones;
  }

  
}
