import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablecimientoPage } from './establecimiento';
import { ComponentsModule } from '../../../components/components.module';
import { MapaProvider } from '../../../providers/mapa/mapa';

@NgModule({
  declarations: [
    EstablecimientoPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EstablecimientoPage),
  ],
  providers:[
    MapaProvider
  ]
})
export class EstablecimientoPageModule {}
