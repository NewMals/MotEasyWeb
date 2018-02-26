import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracionPage } from './configuracion';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ConfiguracionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracionPage),
    ComponentsModule
  ],
})
export class ConfiguracionPageModule {}
