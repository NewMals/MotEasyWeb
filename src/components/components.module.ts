import { NgModule } from '@angular/core';
import { HabitacionesComponent } from './habitaciones/habitaciones';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './configuracion/progress-bar/progress-bar';
import { TipoHabitacionComponent } from './configuracion/tipo-habitacion/tipo-habitacion';

import { WizardComponent } from './wizard/wizard';
import { InformacionGeneralComponent } from './configuracion/establecimiento/informacion-general/informacion-general';
import { UbicacionComponent } from './configuracion/ubicacion/ubicacion';
import { AdDirective } from './wizard/wizard.directive';





@NgModule({
    declarations: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
    UbicacionComponent,
    AdDirective
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
    UbicacionComponent
    ],entryComponents: [
        HabitacionesComponent,
        ProgressBarComponent,
        TipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent
    ]
})
export class ComponentsModule { }
