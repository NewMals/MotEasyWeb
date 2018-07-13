import { NgModule } from '@angular/core';
import { HabitacionesComponent } from './habitaciones/habitaciones';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './configuracion/progress-bar/progress-bar';


import { WizardComponent } from './wizard/wizard';
import { InformacionGeneralComponent } from './configuracion/establecimiento/informacion-general/informacion-general';

import { WizardDirective } from './wizard/wizard.directive';
import { ItemTipoHabitacionComponent } from './configuracion/TiposHabitaciones/tipo-habitacion/Item-tipoHabitacion';
import { UbicacionComponent } from './configuracion/establecimiento/ubicacion/ubicacion';
import { ImagenesComponent } from './configuracion/establecimiento/imagenes/imagenes';
import { RegistroComponent } from './configuracion/Sesion/registro/registro';
import { ReestablecerPassComponent } from './configuracion/Sesion/reestablecer-pass/reestablecer-pass';
import { RegistrarTipHabComponent } from './configuracion/TiposHabitaciones/registrar/registrar-tip-hab';
import { ComplementosComponent } from './configuracion/TiposHabitaciones/complementos/complementos';
import { TarifasComponent } from './configuracion/tarifas/tarifas';
import { EntretenimientosComponent } from './configuracion/TiposHabitaciones/entretenimientos/entretenimientos';




@NgModule({
    declarations: [
        HabitacionesComponent,
        ProgressBarComponent,
        ItemTipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent,
        WizardDirective,
        ImagenesComponent,
        RegistroComponent,
        ReestablecerPassComponent,
        RegistrarTipHabComponent,
        ComplementosComponent,
    TarifasComponent,
    EntretenimientosComponent
    ],
    imports: [
        IonicModule,
        IonicPageModule,
    ],
    exports: [
        HabitacionesComponent,
        ProgressBarComponent,
        ItemTipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent,
        ImagenesComponent,
        RegistroComponent,
        ReestablecerPassComponent,
        RegistrarTipHabComponent,
        ComplementosComponent,
    TarifasComponent,
    EntretenimientosComponent
    ], entryComponents: [
        HabitacionesComponent,
        ProgressBarComponent,
        ItemTipoHabitacionComponent,
        WizardComponent,
        InformacionGeneralComponent,
        UbicacionComponent,
        ImagenesComponent,
        RegistroComponent,
        ReestablecerPassComponent,
        RegistrarTipHabComponent,
        TarifasComponent
    ]
})
export class ComponentsModule { }
