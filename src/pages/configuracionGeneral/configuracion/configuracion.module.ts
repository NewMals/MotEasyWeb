import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracionPage } from './configuracion';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ConfiguracionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ConfiguracionPage)
  ],
})
export class ConfiguracionPageModule {}
