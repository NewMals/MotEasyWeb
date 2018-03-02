import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablecimientoPage } from './establecimiento';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    EstablecimientoPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EstablecimientoPage),
  ],
})
export class EstablecimientoPageModule {}
