import { NgModule } from '@angular/core';
import { HabitacionesComponent } from './habitaciones/habitaciones';
import { IonicModule, IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [HabitacionesComponent],
	imports: [IonicModule,
		IonicPageModule,],
	exports: [HabitacionesComponent]
})
export class ComponentsModule {}
