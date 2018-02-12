import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministracionPage } from './administracion';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdministracionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdministracionPage),
  ],
})
export class AdministracionPageModule {}
