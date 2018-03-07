import { NgModule } from '@angular/core';
import { HabitacionesComponent } from './habitaciones/habitaciones';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './configuracion/progress-bar/progress-bar';


import { WizardComponent } from './wizard/wizard';
import { InformacionGeneralComponent } from './configuracion/establecimiento/informacion-general/informacion-general';

import { WizardDirective } from './wizard/wizard.directive';
import { TipoHabitacionComponent } from './configuracion/TiposHabitaciones/tipo-habitacion/tipo-habitacion';
import { UbicacionComponent } from './configuracion/establecimiento/ubicacion/ubicacion';
import { ImagenesComponent } from './configuracion/imagenes/imagenes';


@NgModule({
    declarations: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
    UbicacionComponent,
    WizardDirective,
    ImagenesComponent
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
        ImagenesComponent
    ],entryComponents: [
        HabitacionesComponent,  
        ProgressBarComponent,
        TipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent,
        ImagenesComponent
    ]
})
export class ComponentsModule { }
