import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarTipHabComponent } from '../../../components/configuracion/TiposHabitaciones/registrar/registrar-tip-hab';
import { TarifasComponent } from '../../../components/configuracion/tarifas/tarifas';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
import { DTOHabitacionTipo, DTOHabitacionView, DTOHabitacionItem } from '../../../modelos/DTOhabitacion';
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

  ionViewWillLeave() {
    this.objetoTipoHabitacion();
    this.TIHservice.guardarBd();
    this.TIHservice.guardarFb();
    this.ESTservice.guardarBd();
    this.ESTservice.guardarFb();
  }

  objetoTipoHabitacion() {

    let objEstablecimiento = this.ESTservice.establecimiento;
    let objTipoHabitacion = this.TIHservice.habitacionTipo;
    let VistaHabitacion = new DTOHabitacionView;

    this.crearVistaHabitacion(VistaHabitacion, objTipoHabitacion);

    objTipoHabitacion.HTIhabitaciones = this.crearHabitaciones(objTipoHabitacion.HTIcantidad);

    objEstablecimiento.ESThabitacionesTipos = (objEstablecimiento.ESThabitacionesTipos && objEstablecimiento.ESThabitacionesTipos.length > 0)  ? objEstablecimiento.ESThabitacionesTipos : new Array<DTOHabitacionView>();
    let idTipoHab = objEstablecimiento.ESThabitacionesTipos.findIndex(index => index.HVIid === objTipoHabitacion.HTIid);

    if (idTipoHab >= 0) {
      objEstablecimiento.ESThabitacionesTipos[idTipoHab] = VistaHabitacion;
    }
    else {
      objEstablecimiento.ESThabitacionesTipos.push(VistaHabitacion);
    }

  }

  crearVistaHabitacion(VistaHabitacion: DTOHabitacionView, objTipoHabitacion: DTOHabitacionTipo) {
    VistaHabitacion.HVIid = objTipoHabitacion.HTIid;
    VistaHabitacion.HVIdescripcion = objTipoHabitacion.HTInombre;
    VistaHabitacion.HVIfoto = (objTipoHabitacion.HTIfotos && objTipoHabitacion.HTIfotos.length > 0) ? objTipoHabitacion.HTIfotos.find(foto => foto.FOTactiva === true).FOTurl : "";
    VistaHabitacion.HVItarifaMin = 0;

    objTipoHabitacion.HTItarifas.forEach(tar => {
      let valor = tar.TARvalor;
      VistaHabitacion.HVItarifaMin = (valor <= VistaHabitacion.HVItarifaMin || VistaHabitacion.HVItarifaMin == 0) ? valor : VistaHabitacion.HVItarifaMin;
    });
  }

  crearHabitaciones(cantidadHab: number): Array<DTOHabitacionItem> {
    let ArrayHabitaciones = new Array<DTOHabitacionItem>();
    for (let i = 1; i <= cantidadHab; i++) {
      let itemHabitacion = new DTOHabitacionItem;
      itemHabitacion.HITid = Math.random().toString(36).substring(2);
      itemHabitacion.HITestado = "Disponible";
      itemHabitacion.HITidentidad = i.toString();

      ArrayHabitaciones.push(itemHabitacion);
    }
    return ArrayHabitaciones;
  }

}
