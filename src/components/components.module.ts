import { NgModule } from '@angular/core';
import { HabitacionComponent } from './administracion/habitaciones/habitacion';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './configuracion/progress-bar/progress-bar';
import { WizardComponent } from './wizard/wizard';
import { InformacionGeneralComponent } from './configuracion/establecimiento/informacion-general/informacion-general';
import { WizardDirective } from './wizard/wizard.directive';
import { ItemTipoHabitacionComponent } from './configuracion/TiposHabitaciones/tipo-habitacion/Item-tipoHabitacion';
import { UbicacionComponent } from './configuracion/establecimiento/ubicacion/ubicacion';
import { ImagenesComponent } from './configuracion/imagenes/imagenes';
import { RegistroComponent } from './configuracion/Sesion/registro/registro';
import { ReestablecerPassComponent } from './configuracion/Sesion/reestablecer-pass/reestablecer-pass';
import { RegistrarTipHabComponent } from './configuracion/TiposHabitaciones/registrar/registrar-tip-hab';
import { ComplementosComponent } from './configuracion/TiposHabitaciones/complementos/complementos';
import { TarifasComponent } from './configuracion/tarifas/tarifas';
import { EntretenimientosComponent } from './configuracion/TiposHabitaciones/entretenimientos/entretenimientos';
import { ViewEstablecimientoComponent } from './configuracion/establecimiento/view-establecimiento/view-establecimiento';
import { RegistrarHabitacionComponent } from './administracion/registrar-habitacion/registrar-habitacion';
import { GenerarHabitacionesComponent } from './administracion/generar-habitaciones/generar-habitaciones';




@NgModule({
    declarations: [
        HabitacionComponent,
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
        EntretenimientosComponent,
        ViewEstablecimientoComponent,
        RegistrarHabitacionComponent,
        GenerarHabitacionesComponent
    ],
    imports: [
        IonicModule,
        IonicPageModule,
    ],
    exports: [
        HabitacionComponent,
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
        EntretenimientosComponent,
        ViewEstablecimientoComponent,
        RegistrarHabitacionComponent,
        GenerarHabitacionesComponent
    ], entryComponents: [
        HabitacionComponent,
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
