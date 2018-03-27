import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiposHabitacionesPage } from './tipos-habitaciones';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    TiposHabitacionesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TiposHabitacionesPage),
  ],
})
export class TiposHabitacionesPageModule {}
