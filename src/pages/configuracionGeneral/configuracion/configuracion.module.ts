import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracionPage } from './configuracion';
import { ComponentsModule } from '../../../components/components.module';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';
import { ComplementoProvider } from '../../../providers/general/complemento';

@NgModule({
  declarations: [
    ConfiguracionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ConfiguracionPage)
  ],
  exports:[
    ConfiguracionPage
  ],
  providers:[
    ComplementoProvider,
    HabitacionTipoProvider
  ]
})
export class ConfiguracionPageModule {}
