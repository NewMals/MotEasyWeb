import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarTipHabComponent } from '../../../components/configuracion/TiposHabitaciones/registrar/registrar-tip-hab';
import { TarifasComponent } from '../../../components/configuracion/tarifas/tarifas';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
import { DTOHabitaciontipo, DTOViewhabitacion, DTOItemhabitacion } from '../../../modelos/DTOhabitacion';
import { ImagenesComponent } from '../../../components/configuracion/imagenes/imagenes';



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
    this.objetoTipoHabitacion();
    this.TIHservice.guardarBd();
    this.TIHservice.guardarFb();
    this.ESTservice.guardarBd();
    this.ESTservice.guardarFb();
  }

  objetoTipoHabitacion() {

    let objEstablecimiento = this.ESTservice.establecimiento.ESThabitacionesTipos;
    let objTipoHabitacion = this.TIHservice.habitacionTipo;
    let VistaHabitacion = new DTOViewhabitacion;

    VistaHabitacion.HTIid = objTipoHabitacion.HTIid;
    VistaHabitacion.HTIdescripcion = objTipoHabitacion.HTInombre;
    VistaHabitacion.HTIfoto = (objTipoHabitacion.HTIfotos && objTipoHabitacion.HTIfotos.length > 0) ? objTipoHabitacion.HTIfotos.find(foto => foto.FOTactiva === true).FOTurl : "";
    VistaHabitacion.HTItarifaMin = 0;

    if (objTipoHabitacion.HTIcantidad > 0) {
      objTipoHabitacion.HTIhabitaciones = this.crearHabitaciones(objTipoHabitacion.HTIcantidad);
    }

    objTipoHabitacion.HTItarifas.forEach(tar => {
      let valor = tar.TARvalor;
      VistaHabitacion.HTItarifaMin = (valor <= VistaHabitacion.HTItarifaMin || VistaHabitacion.HTItarifaMin == 0) ? valor : VistaHabitacion.HTItarifaMin;
    });

    objEstablecimiento = (objEstablecimiento && objEstablecimiento.length > 0)  ? objEstablecimiento : new Array<DTOViewhabitacion>();
    let idTipoHab = objEstablecimiento.findIndex(index => index.HTIid === objTipoHabitacion.HTIid);

    if (idTipoHab >= 0) {
      objEstablecimiento[idTipoHab] = VistaHabitacion;
    }
    else {
      objEstablecimiento.push(VistaHabitacion);
    }

    // if (tipoHab.HTIid !== ) {

    //   // let valor = est.ESThabitacionesTipos.findIndex(index => index.HTIid === tipoHab.HTIid);
    //   // hab.HTIid = tipoHab.HTIid;

    // } else {
    //   est.ESThabitacionesTipos = est.ESThabitacionesTipos ? est.ESThabitacionesTipos : new Array<DTOViewhabitacion>();
    //   // hab.HTIid = est.ESThabitacionesTipos ? est.ESThabitacionesTipos.length : 0;
    //   // this.TIHservice.habitacionTipo.HTIid = hab.HTIid;

    // }
  }

  crearHabitaciones(cantidadHab: number): Array<DTOItemhabitacion> {
    let ArrayHabitaciones = new Array<DTOItemhabitacion>();
    for (let i = 0; i < cantidadHab; i++) {
      let itemHabitacion = new DTOItemhabitacion;
      itemHabitacion.HIHid = Math.random().toString(36).substring(7);
      itemHabitacion.HIHestado = "Disponible";
      itemHabitacion.HIHidentidad = i.toString();

      ArrayHabitaciones.push(itemHabitacion);
    }
    return ArrayHabitaciones;
  }


}
