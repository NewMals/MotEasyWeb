import { Component, ViewChild } from '@angular/core';
import { DTOfoto } from '../../../modelos/DTOfoto';
import { AlertController } from 'ionic-angular';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';

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
export class ImagenesComponent {

  text: string;
  ArrayFotos = new Array<DTOfoto>();
  @ViewChild('fileInput') fileInput;
  FotoSeleccionada: DTOfoto;
  posicion: number = 0;
  establecimiento = new DTOEstablecimiento;

  constructor(private alertCtrl: AlertController
    , private general: EstablecimientoProvider
  ) {
    console.log('Hello ImagenesComponent Component');
    this.text = 'Hello World';
    //this.CargarFotos();
    this.general.consultarBd("Establecimiento").then(data =>{
      this.establecimiento = data as DTOEstablecimiento;
    });
  }

  CargarFotos() {
    let Foto = new DTOfoto;
    Foto.FOTprincipal = true;
    Foto.FOTurl = "https://firebasestorage.googleapis.com/v0/b/mote-e0df6.appspot.com/o/establecimientos%2FVS2R6uXf0cS16GwPwyqF%2Fsitio%2FEST_1.jpg?alt=media&token=ec85d42c-5c41-41d5-80a1-2bd7f7c876c6";
    Foto.FOTorden = 1;

    this.ArrayFotos.push(Foto);
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
      Foto.FOTprincipal = false;
      Foto.FOTurl = imageData;
      Foto.FOTorden = this.ArrayFotos.length + 1;
      //this.general.storageGuardarFb(Foto);
      this.ArrayFotos.push(Foto);
      this.SeleccionarFoto(Foto);
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
          this.ArrayFotos.splice(this.posicion, 1);
          if(this.posicion == 0 && this.ArrayFotos.length == 0){
              this.SeleccionarFoto(null);
          }else {
              this.posicion = 0;
              this.SeleccionarFoto(this.ArrayFotos[this.posicion]);
          }
        }
      }]
    });
    alert.present();
  }

  guardar() {
    this.ArrayFotos.forEach(foto =>{
      this.general.storageGuardarFb(foto).then(succes =>{
      });
    });
  }

}
