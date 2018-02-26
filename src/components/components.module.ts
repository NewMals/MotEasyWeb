import { NgModule } from '@angular/core';
import { HabitacionesComponent } from './habitaciones/habitaciones';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './configuracion/progress-bar/progress-bar';
import { TipoHabitacionComponent } from './configuracion/tipo-habitacion/tipo-habitacion';
import { EstablecimientoComponent } from './configuracion/establecimiento/establecimiento';


@NgModule({
    declarations: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        EstablecimientoComponent
    ],
    imports: [
        IonicModule,
        IonicPageModule,
    ],
    exports: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        EstablecimientoComponent
    ]
})
export class ComponentsModule { }
