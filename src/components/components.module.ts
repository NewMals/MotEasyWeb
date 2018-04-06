import { NgModule } from '@angular/core';
import { HabitacionesComponent } from './habitaciones/habitaciones';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './configuracion/progress-bar/progress-bar';


import { WizardComponent } from './wizard/wizard';
import { InformacionGeneralComponent } from './configuracion/establecimiento/informacion-general/informacion-general';

import { WizardDirective } from './wizard/wizard.directive';
import { TipoHabitacionComponent } from './configuracion/TiposHabitaciones/tipo-habitacion/tipo-habitacion';
import { UbicacionComponent } from './configuracion/establecimiento/ubicacion/ubicacion';
import { ImagenesComponent } from './configuracion/establecimiento/imagenes/imagenes';
import { RegistroComponent } from './configuracion/Sesion/registro/registro';
import { ReestablecerPassComponent } from './configuracion/Sesion/reestablecer-pass/reestablecer-pass';
import { RegistrarTipHabComponent } from './configuracion/TiposHabitaciones/registrar/registrar-tip-hab';
import { ComplementosComponent } from './configuracion/TiposHabitaciones/complementos/complementos';




@NgModule({
    declarations: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent,
        WizardDirective,
        ImagenesComponent,
        RegistroComponent,
        ReestablecerPassComponent,
        RegistrarTipHabComponent,
        ComplementosComponent
    ],
    imports: [
        IonicModule,
        IonicPageModule,
    ],
    exports: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent,
        ImagenesComponent,
        RegistroComponent,
        ReestablecerPassComponent,
        RegistrarTipHabComponent,
        ComplementosComponent
    ], entryComponents: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent,
        ImagenesComponent,
        RegistroComponent,
        ReestablecerPassComponent,
        RegistrarTipHabComponent
    ]
})
export class ComponentsModule { }
