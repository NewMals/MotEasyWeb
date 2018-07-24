import { Component, ViewChild, OnInit } from '@angular/core';
import { DTOfoto } from '../../../modelos/DTOfoto';
import { AlertController, NavParams } from 'ionic-angular';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
import { StorageProvider } from '../../../providers/general/storage';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';

/**
 * Generated class for the ImagenesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imagenes',
  templateUrl: 'imagenes.html'
})
export class ImagenesComponent implements OnInit {

  text: string;
  ArrayFotos = new Array<DTOfoto>();
  @ViewChild('fileInput') fileInput;
  FotoSeleccionada: DTOfoto;
  posicion: number = 0;
  establecimiento: DTOEstablecimiento;
  file: string;
  marca: string;

  constructor(private alertCtrl: AlertController
    , public navParams: NavParams
    , private ESTservice: EstablecimientoProvider
    , private STOservice: StorageProvider
    , private HABservice: HabitacionTipoProvider
  ) {
    console.log('Hello ImagenesComponent Component');
    this.text = 'Hello World';
    // this.establecimiento = {
    //   ESTnit: 0, ESTnombre: "", ESTgeolocalizacion: { latitude: 0, longitude: 0 }
    //   , ESTfotos: [{ FOTurl: "", FOTorden: 0, FOTactiva: false, FOTprincipal: false }]
    // };
    //this.CargarFotos();
    this.ArrayFotos = this.navParams.get("objFotos");
    this.file = this.navParams.get("file");
    this.marca = this.navParams.get("marca");
  }

  ngOnInit(): void {
    this.obtenerEST();
  }

  obtenerEST() {
    // this.establecimiento = this.ESTservice.establecimiento;
    this.CargarFotos();
  }

  CargarFotos() {
    if (this.ArrayFotos) {
      // this.ArrayFotos.forEach(foto => {
      //   // let Foto = new DTOfoto;
      //   // Foto.FOTprincipal = true;
      //   // Foto.FOTurl = "https://firebasestorage.googleapis.com/v0/b/mote-e0df6.appspot.com/o/establecimientos%2FVS2R6uXf0cS16GwPwyqF%2Fsitio%2FEST_1.jpg?alt=media&token=ec85d42c-5c41-41d5-80a1-2bd7f7c876c6";
      //   // Foto.FOTorden = 1;
      //   foto.FOTactiva = false;
      //   // this.ArrayFotos.push(foto);
      // });
      this.SeleccionarFoto(this.ArrayFotos.find(foto => foto.FOTactiva ===true));
    }
  }

  AgregarFoto() {
    if (this.ArrayFotos.length == 6) {
      this.Alertas('Ha superado el limite de imágenes');
      return;
    }

    this.fileInput.nativeElement.click();
  }

  ProcessImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;

      let Foto = new DTOfoto;
      if (this.ArrayFotos.length == 0) {
        Foto.FOTprincipal = true;
      } else {
        Foto.FOTprincipal = false;
      }

      Foto.FOTurl = imageData;
      Foto.FOTorden = this.ArrayFotos.length + 1;
      this.STOservice.GuardarFb(this.file, this.marca, Foto).then((succes: DTOfoto) => {
        Foto.FOTurl = succes.FOTurl;
        this.ArrayFotos.push(Foto);
        this.guardar();
        this.SeleccionarFoto(Foto);
      });
    };
    if (event.target.files[0])
      reader.readAsDataURL(event.target.files[0]);

  }

  Alertas(message: string) {
    let alert = this.alertCtrl.create({
      title: message,
      buttons: ['Aceptar']
    });

    alert.present();
  }

  SeleccionarFoto(foto: DTOfoto) {
    if (foto) {
      this.ArrayFotos[this.posicion].FOTactiva = false;
      this.posicion = this.ArrayFotos.findIndex(index => index === foto);
      this.ArrayFotos[this.posicion].FOTactiva = true;
      this.FotoSeleccionada = foto;
    } else {
      this.FotoSeleccionada = null;
    }
  }

  EliminarFoto() {
    let alert = this.alertCtrl.create({

      title: '¿ Está seguro de eliminar la foto ?',
      buttons: [{
        text: 'Cancelar'
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.STOservice.EliminarFb(this.file, this.ArrayFotos[this.posicion].FOTorigen).then(succes => {
            if (succes === true) {
              this.ArrayFotos.splice(this.posicion, 1);
              if (this.posicion == 0 && this.ArrayFotos.length == 0) {
                this.SeleccionarFoto(null);
              } else {
                this.posicion = 0;
                this.SeleccionarFoto(this.ArrayFotos[this.posicion]);
              }
            }
            this.guardar();
          });
        }
      }]
    });
    alert.present();
  }

  guardar() {
    if (this.marca === "EST") {
      this.ESTservice.establecimiento.ESTfotos = this.ArrayFotos;
      this.ESTservice.guardarFb();
    }
    else if(this.marca === "HAB"){
      this.HABservice.habitacionTipo.HTIfotos = this.ArrayFotos;
      this.HABservice.guardarFb();
    }
    
  }

}
