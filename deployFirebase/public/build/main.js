webpackJsonp([2],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOusuario; });
var DTOusuario = /** @class */ (function () {
    function DTOusuario() {
    }
    return DTOusuario;
}());

//# sourceMappingURL=DTOusuario.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__administracion_habitaciones_habitacion__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wizard_wizard_directive__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_Item_tipoHabitacion__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__configuracion_Sesion_registro_registro__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__configuracion_Sesion_reestablecer_pass_reestablecer_pass__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__configuracion_TiposHabitaciones_registrar_registrar_tip_hab__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__configuracion_TiposHabitaciones_complementos_complementos__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__configuracion_tarifas_tarifas__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__configuracion_TiposHabitaciones_entretenimientos_entretenimientos__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__configuracion_establecimiento_view_establecimiento_view_establecimiento__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__administracion_registrar_habitacion_registrar_habitacion__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__administracion_habitaciones_habitacion__["a" /* HabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_Item_tipoHabitacion__["a" /* ItemTipoHabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__["a" /* InformacionGeneralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__wizard_wizard_directive__["a" /* WizardDirective */],
                __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__["a" /* ImagenesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__configuracion_Sesion_registro_registro__["a" /* RegistroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__configuracion_Sesion_reestablecer_pass_reestablecer_pass__["a" /* ReestablecerPassComponent */],
                __WEBPACK_IMPORTED_MODULE_12__configuracion_TiposHabitaciones_registrar_registrar_tip_hab__["a" /* RegistrarTipHabComponent */],
                __WEBPACK_IMPORTED_MODULE_13__configuracion_TiposHabitaciones_complementos_complementos__["a" /* ComplementosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__configuracion_tarifas_tarifas__["a" /* TarifasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__configuracion_TiposHabitaciones_entretenimientos_entretenimientos__["a" /* EntretenimientosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__configuracion_establecimiento_view_establecimiento_view_establecimiento__["a" /* ViewEstablecimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__administracion_registrar_habitacion_registrar_habitacion__["a" /* RegistrarHabitacionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__administracion_habitaciones_habitacion__["a" /* HabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_Item_tipoHabitacion__["a" /* ItemTipoHabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__["a" /* InformacionGeneralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__["a" /* ImagenesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__configuracion_Sesion_registro_registro__["a" /* RegistroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__configuracion_Sesion_reestablecer_pass_reestablecer_pass__["a" /* ReestablecerPassComponent */],
                __WEBPACK_IMPORTED_MODULE_12__configuracion_TiposHabitaciones_registrar_registrar_tip_hab__["a" /* RegistrarTipHabComponent */],
                __WEBPACK_IMPORTED_MODULE_13__configuracion_TiposHabitaciones_complementos_complementos__["a" /* ComplementosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__configuracion_tarifas_tarifas__["a" /* TarifasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__configuracion_TiposHabitaciones_entretenimientos_entretenimientos__["a" /* EntretenimientosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__configuracion_establecimiento_view_establecimiento_view_establecimiento__["a" /* ViewEstablecimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__administracion_registrar_habitacion_registrar_habitacion__["a" /* RegistrarHabitacionComponent */]
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__administracion_habitaciones_habitacion__["a" /* HabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_Item_tipoHabitacion__["a" /* ItemTipoHabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__["a" /* InformacionGeneralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__["a" /* ImagenesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__configuracion_Sesion_registro_registro__["a" /* RegistroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__configuracion_Sesion_reestablecer_pass_reestablecer_pass__["a" /* ReestablecerPassComponent */],
                __WEBPACK_IMPORTED_MODULE_12__configuracion_TiposHabitaciones_registrar_registrar_tip_hab__["a" /* RegistrarTipHabComponent */],
                __WEBPACK_IMPORTED_MODULE_14__configuracion_tarifas_tarifas__["a" /* TarifasComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administracion/administracion.module": [
		250
	],
	"../pages/configuracionGeneral/configuracion/configuracion.module": [
		270
	],
	"../pages/configuracionGeneral/establecimiento/establecimiento.module": [
		614,
		1
	],
	"../pages/configuracionGeneral/tipos-habitaciones/tipos-habitaciones.module": [
		615,
		0
	],
	"../pages/login/login.module": [
		272
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 249;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionPageModule", function() { return AdministracionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administracion__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdministracionPageModule = /** @class */ (function () {
    function AdministracionPageModule() {
    }
    AdministracionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__administracion__["a" /* AdministracionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__administracion__["a" /* AdministracionPage */]),
            ],
        })
    ], AdministracionPageModule);
    return AdministracionPageModule;
}());

//# sourceMappingURL=administracion.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_general_habitacion_tipo__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdministracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdministracionPage = /** @class */ (function () {
    function AdministracionPage(navCtrl, navParams, modalCtrl, ESTservice, TIHservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ESTservice = ESTservice;
        this.TIHservice = TIHservice;
        this.tiposHabitacion = new Array();
        this.habitaciones = new Array();
    }
    AdministracionPage.prototype.ionViewDidLoad = function () {
        this.cargarTipos();
        console.log('ionViewDidLoad AdministracionPage');
    };
    AdministracionPage.prototype.cargarTipos = function () {
        this.tiposHabitacion = this.ESTservice.establecimiento.ESThabitacionesTipos;
    };
    AdministracionPage.prototype.mostrarHabitaciones = function (idTipo) {
        // let modal = this.modalCtrl.create(
        //   GenerarHabitacionesComponent, null, { enableBackdropDismiss: false }
        // )
        var _this = this;
        // modal.onDidDismiss(() => {
        //   this.cargarTipos();
        // });
        this.TIHservice.inicializar(idTipo).then(function () {
            _this.habitaciones = _this.TIHservice.habitacionTipo.HTIhabitaciones;
            //   if (this.habitaciones === undefined || this.habitaciones.length > 0) {
            //     modal.present();
            // }
        });
    };
    AdministracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administracion',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\pages\administracion\administracion.html"*/'<!--\n\n  Generated template for the AdministracionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>administracion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row style="height: 100%">\n\n    <ion-col class="panelIzquierdo">\n\n      <ion-row *ngFor="let tipo of tiposHabitacion">\n\n        <ion-col>\n\n          <button class="TipoHabitacion" (click)="mostrarHabitaciones(tipo.HVIid)">{{tipo.HVIdescripcion}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n    <ion-col class="panelDerecho">\n\n      <!-- <div *ngIf="habitaciones.length > 0">\n\n        <generar-habitaciones></generar-habitaciones>\n\n      </div> -->\n\n      <div *ngFor="let habitacion of habitaciones" class="general">\n\n        <habitacion [Habitacion]="habitacion">\n\n        </habitacion>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\pages\administracion\administracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_Establecimiento__["a" /* EstablecimientoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */]])
    ], AdministracionPage);
    return AdministracionPage;
}());

//# sourceMappingURL=administracion.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardDirective = /** @class */ (function () {
    function WizardDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    WizardDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[paso-paso]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], WizardDirective);
    return WizardDirective;
}());

//# sourceMappingURL=wizard.directive.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOposicion; });
var DTOposicion = /** @class */ (function () {
    function DTOposicion() {
    }
    return DTOposicion;
}());

//# sourceMappingURL=DTOposicion.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';



/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(USUservice) {
        this.USUservice = USUservice;
        this.storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.GuardarFb = function (file, marca, foto) {
        var origen = "";
        origen = marca + "_" + Math.random().toString(36).substring(7) + ".jpg";
        // return this.USUservice.consultarBd().then(data => {
        return this.storageRef.child("establecimientos/" + this.USUservice.user.USUestablecimiento + "/" + file + "/" + origen)
            .putString(foto.FOTurl, 'data_url')
            .then(function (snapshot) {
            foto.FOTurl = snapshot.downloadURL;
            foto.FOTorigen = origen;
            return foto;
        });
        // });
    };
    StorageProvider.prototype.EliminarFb = function (file, origen) {
        return this.storageRef.child("establecimientos/" + this.USUservice.user.USUestablecimiento + "/" + file + "/" + origen)
            .delete().then(function () {
            return true;
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserProvider */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelos_DTOusuario__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegistroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(viewCtrl, auth) {
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__modelos_DTOusuario__["a" /* DTOusuario */];
        this.password = "";
        this.confirPassword = "";
        this.Habilitar = false;
        console.log('Hello RegistroComponent Component');
        this.text = 'Hello World';
    }
    RegistroComponent.prototype.CerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    RegistroComponent.prototype.confirmarPass = function (event) {
        this.sizePass = (this.password.length > 7) ? false : true;
        this.Habilitar = ((this.password == this.confirPassword) && this.password.length > 7) ? true : false;
    };
    RegistroComponent.prototype.RegistrarUsuario = function () {
        var _this = this;
        if ((this.password.length > 7) && (this.password == this.confirPassword) && (this.usuario.USUemail)) {
            this.auth.createEmail(this.usuario, this.password).then(function (usuario) {
                if (usuario == "true") {
                    _this.CerrarModal();
                }
                else {
                    _this.mensajeError = usuario;
                }
            });
        }
    };
    RegistroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'registro',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\Sesion\registro\registro.html"*/'<!-- Generated template for the RegistroComponent component -->\n\n<ion-content>\n\n\n\n  <ion-card padding style="text-align: center;">\n\n    <button ion-fab mini style="float: right;" (click)="CerrarModal()">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n    <ion-card-header>\n\n      <ion-label>Informacion</ion-label>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-label class="mjsError">Por favor diligenciar los campos obligatorios (*)</ion-label>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Primer nombre *</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUprimerNombre" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Segundo nombre</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUsegundoNombre" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Primer apellido *</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUprimerApellido" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Segundo apellido</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUsegundoApellido" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Num. identificación *</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUidentificacion" type="number"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Ciudad</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUciudad" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Correo electronico *</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUemail" type="email"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Celular *</ion-label>\n\n            <ion-input [(ngModel)]="usuario.USUcelular" type="number"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Contraseña *</ion-label>\n\n            <ion-input [(ngModel)]="password" type="password" (keyup)="confirmarPass($event)"></ion-input>\n\n          </ion-item>\n\n          <ion-label class="mjsError" *ngIf="sizePass"> * Utiliza una contraseña mayor a 8 caracteres</ion-label>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked required>Confirmar contraseña</ion-label>\n\n            <ion-input [disabled]="!password" [(ngModel)]="confirPassword" type="password" (keyup)="confirmarPass($event)"></ion-input>\n\n          </ion-item>\n\n          <ion-label class="mjsError" *ngIf="confirPassword && password != confirPassword"> * La contraseña no es igual</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n    <ion-label color="danger">{{mensajeError}}</ion-label>\n\n    <button [disabled]="!Habilitar" ion-button icon-left color="primary" style="bottom: 5px" (click)="RegistrarUsuario()">\n\n      Registrarme\n\n    </button>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\Sesion\registro\registro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], RegistroComponent);
    return RegistroComponent;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReestablecerPassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReestablecerPassComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ReestablecerPassComponent = /** @class */ (function () {
    function ReestablecerPassComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        console.log('Hello ReestablecerPassComponent Component');
        this.text = 'Hello World';
    }
    ReestablecerPassComponent.prototype.CerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    ReestablecerPassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'reestablecer-pass',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\Sesion\reestablecer-pass\reestablecer-pass.html"*/'<!-- Generated template for the ReestablecerPassComponent component -->\n\n<ion-card padding style="height: 100%; text-align: center; margin: auto">\n\n  <button ion-fab mini style="float: right;" (click)="CerrarModal()">\n\n    <ion-icon name="close"></ion-icon>\n\n  </button>\n\n  <ion-card-header>\n\n  </ion-card-header>\n\n</ion-card>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\Sesion\reestablecer-pass\reestablecer-pass.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ReestablecerPassComponent);
    return ReestablecerPassComponent;
}());

//# sourceMappingURL=reestablecer-pass.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplementoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOcomplemento__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ComplementoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ComplementoProvider = /** @class */ (function () {
    function ComplementoProvider(storage) {
        this.storage = storage;
        this.ArrayCOM = new Array();
        console.log('Hello ComplementoProvider Provider');
        this.ArrayCOM = new Array();
    }
    ComplementoProvider.prototype.inicializar = function () {
        // return this.consultarBd().then(data => {
        //   if (!data) {
        return this.consultaFb();
        //   }
        //   return data;
        // });
    };
    ComplementoProvider.prototype.consultarBd = function () {
        var _this = this;
        return this.storage.get("Complementos")
            .then(function (data) {
            _this.ArrayCOM = JSON.parse(data);
            return _this.ArrayCOM;
        });
    };
    ComplementoProvider.prototype.consultaFb = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["firestore"]().collection("Complementos").get()
            .then(function (data) {
            _this.ArrayCOM = new Array();
            data.forEach(function (doc) {
                var complemento = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOcomplemento__["a" /* DTOcomplemento */];
                complemento = doc.data();
                complemento.COMid = doc.id;
                _this.ArrayCOM.push(complemento);
            });
            _this.guardarBd();
            return _this.ArrayCOM;
        });
    };
    ComplementoProvider.prototype.guardarBd = function () {
        this.storage.set("Complementos", JSON.stringify(this.ArrayCOM));
    };
    ComplementoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ComplementoProvider);
    return ComplementoProvider;
}());

//# sourceMappingURL=complemento.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function() { return ConfiguracionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracion__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_general_complemento__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConfiguracionPageModule = /** @class */ (function () {
    function ConfiguracionPageModule() {
    }
    ConfiguracionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracion__["a" /* ConfiguracionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracion__["a" /* ConfiguracionPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__configuracion__["a" /* ConfiguracionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_general_complemento__["a" /* ComplementoProvider */]
            ]
        })
    ], ConfiguracionPageModule);
    return ConfiguracionPageModule;
}());

//# sourceMappingURL=configuracion.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelos_DTOestablecimiento__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_general_habitacion_tipo__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracionPage = /** @class */ (function () {
    function ConfiguracionPage(navCtrl, navParams, ESTservice, TIHservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ESTservice = ESTservice;
        this.TIHservice = TIHservice;
        this.text = 'progress-bar';
        this.est = new __WEBPACK_IMPORTED_MODULE_3__modelos_DTOestablecimiento__["a" /* DTOEstablecimiento */];
        console.log("Hello Configuracion");
    }
    ConfiguracionPage.prototype.ionViewDidEnter = function () {
        this.obtenerEstablecimiento();
    };
    ConfiguracionPage.prototype.obtenerEstablecimiento = function () {
        this.est.ESThabitacionesTipos = this.ESTservice.establecimiento.ESThabitacionesTipos;
    };
    ConfiguracionPage.prototype.AgregarTipHab = function () {
        this.TIHservice.crear();
        var ArrayFotos = new Array();
        if (this.TIHservice.habitacionTipo.HTIfotos) {
            ArrayFotos = this.TIHservice.habitacionTipo.HTIfotos;
        }
        this.navCtrl.setRoot("TiposHabitacionesPage", {
            objFotos: ArrayFotos,
            file: "habitacion_" + this.TIHservice.habitacionTipo.HTIid,
            marca: "HAB"
        });
    };
    ConfiguracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracion',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\pages\configuracionGeneral\configuracion\configuracion.html"*/'<!--\n\n  Generated template for the ConfiguracionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>configuracion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <div class="general"> -->\n\n    <!-- <ion-card>\n\n      <progress-bar></progress-bar>\n\n    </ion-card> -->\n\n    <ion-row>\n\n      <ion-col class="establecimiento">\n\n        <view-establecimiento></view-establecimiento>\n\n        <!-- <ion-card>\n\n          <ion-card-header>\n\n            <ion-card-title>Motel</ion-card-title>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <ion-item (click)="configurarEstablecimiento()">\n\n              Ver informacion\n\n              <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card> -->\n\n      </ion-col>\n\n      <ion-col>\n\n        <!-- <ion-card> -->\n\n        <ion-card-header>\n\n          <ion-card-title>Tipos de habitación\n\n            <button ion-fab mini style="float: right; height: 30px; width: 30px; " (click)="AgregarTipHab()">\n\n              <ion-icon name="add"></ion-icon>\n\n            </button>\n\n          </ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <div *ngFor="let hab of est.ESThabitacionesTipos">\n\n            <Item-tipoHabitacion [Tipohabitacion]="hab"></Item-tipoHabitacion>\n\n            <!-- <ion-item (click)="configurarHabitacion(hab.HTIid)">\n\n            {{hab.HTIdescripcion}}\n\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n          </ion-item> -->\n\n          </div>\n\n        </ion-card-content>\n\n        <!-- </ion-card> -->\n\n      </ion-col>\n\n    </ion-row>\n\n  <!-- </div> -->\n\n</ion-content>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\pages\configuracionGeneral\configuracion\configuracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_Establecimiento__["a" /* EstablecimientoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */]])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());

//# sourceMappingURL=configuracion.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOfoto__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_general_storage__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_general_habitacion_tipo__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ImagenesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ImagenesComponent = /** @class */ (function () {
    function ImagenesComponent(alertCtrl, navParams, ESTservice, STOservice, HABservice) {
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.ESTservice = ESTservice;
        this.STOservice = STOservice;
        this.HABservice = HABservice;
        this.ArrayFotos = new Array();
        this.posicion = 0;
        console.log('Hello ImagenesComponent Component');
        this.text = 'Hello World';
        // this.establecimiento = {
        //   ESTnit: 0, ESTnombre: "", ESTgeolocalizacion: { latitude: 0, longitude: 0 }
        //   , ESTfotos: [{ FOTurl: "", FOTorden: 0, FOTactiva: false, FOTprincipal: false }]
        // };
        //this.CargarFotos();
        this.ArrayFotos = this.navParams.get("objFotos");
        this.file = this.navParams.get("file");
        this.marca = this.navParams.get("marca");
    }
    ImagenesComponent.prototype.ngOnInit = function () {
        this.obtenerEST();
    };
    ImagenesComponent.prototype.obtenerEST = function () {
        // this.establecimiento = this.ESTservice.establecimiento;
        this.CargarFotos();
    };
    ImagenesComponent.prototype.CargarFotos = function () {
        if (this.ArrayFotos) {
            // this.ArrayFotos.forEach(foto => {
            //   // let Foto = new DTOfoto;
            //   // Foto.FOTprincipal = true;
            //   // Foto.FOTurl = "https://firebasestorage.googleapis.com/v0/b/mote-e0df6.appspot.com/o/establecimientos%2FVS2R6uXf0cS16GwPwyqF%2Fsitio%2FEST_1.jpg?alt=media&token=ec85d42c-5c41-41d5-80a1-2bd7f7c876c6";
            //   // Foto.FOTorden = 1;
            //   foto.FOTactiva = false;
            //   // this.ArrayFotos.push(foto);
            // });
            this.SeleccionarFoto(this.ArrayFotos.find(function (foto) { return foto.FOTactiva === true; }));
        }
    };
    ImagenesComponent.prototype.AgregarFoto = function () {
        if (this.ArrayFotos.length == 6) {
            this.Alertas('Ha superado el limite de imágenes');
            return;
        }
        this.fileInput.nativeElement.click();
    };
    ImagenesComponent.prototype.ProcessImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            var Foto = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOfoto__["a" /* DTOfoto */];
            if (_this.ArrayFotos.length == 0) {
                Foto.FOTprincipal = true;
            }
            else {
                Foto.FOTprincipal = false;
            }
            Foto.FOTurl = imageData;
            Foto.FOTorden = _this.ArrayFotos.length + 1;
            _this.STOservice.GuardarFb(_this.file, _this.marca, Foto).then(function (succes) {
                Foto.FOTurl = succes.FOTurl;
                _this.ArrayFotos.push(Foto);
                _this.guardar();
                _this.SeleccionarFoto(Foto);
            });
        };
        if (event.target.files[0])
            reader.readAsDataURL(event.target.files[0]);
    };
    ImagenesComponent.prototype.Alertas = function (message) {
        var alert = this.alertCtrl.create({
            title: message,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    ImagenesComponent.prototype.SeleccionarFoto = function (foto) {
        if (foto) {
            this.ArrayFotos[this.posicion].FOTactiva = false;
            this.posicion = this.ArrayFotos.findIndex(function (index) { return index === foto; });
            this.ArrayFotos[this.posicion].FOTactiva = true;
            this.FotoSeleccionada = foto;
        }
        else {
            this.FotoSeleccionada = null;
        }
    };
    ImagenesComponent.prototype.EliminarFoto = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿ Está seguro de eliminar la foto ?',
            buttons: [{
                    text: 'Cancelar'
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.STOservice.EliminarFb(_this.file, _this.ArrayFotos[_this.posicion].FOTorigen).then(function (succes) {
                            if (succes === true) {
                                _this.ArrayFotos.splice(_this.posicion, 1);
                                if (_this.posicion == 0 && _this.ArrayFotos.length == 0) {
                                    _this.SeleccionarFoto(null);
                                }
                                else {
                                    _this.posicion = 0;
                                    _this.SeleccionarFoto(_this.ArrayFotos[_this.posicion]);
                                }
                            }
                            _this.guardar();
                        });
                    }
                }]
        });
        alert.present();
    };
    ImagenesComponent.prototype.guardar = function () {
        if (this.marca === "EST") {
            this.ESTservice.establecimiento.ESTfotos = this.ArrayFotos;
            this.ESTservice.guardarFb();
        }
        else if (this.marca === "HAB") {
            this.HABservice.habitacionTipo.HTIfotos = this.ArrayFotos;
            this.HABservice.guardarFb();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ImagenesComponent.prototype, "fileInput", void 0);
    ImagenesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'imagenes',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\imagenes\imagenes.html"*/'<!-- Generated template for the ImagenesComponent component -->\n\n<div>\n\n  <h1 style="text-align: center">Fotos del establecimiento</h1>\n\n  <ion-card padding style="height: 30% ; width: 40%; margin: auto;">\n\n    <button ion-fab title="Eliminar foto" style="top: -10px ; float: right; height: 30px; width: 30px;" (click)="EliminarFoto()">\n\n      <ion-icon name="close" color="primary"></ion-icon>\n\n    </button>\n\n    <div *ngIf="FotoSeleccionada">\n\n      <img class="imagen" src="{{FotoSeleccionada.FOTurl}}" onerror="this.src=\'assets/icon/picture.svg\';"/>\n\n    </div>\n\n  </ion-card>\n\n  <br>\n\n  <ion-card padding>\n\n    <button ion-fab title="Agregar foto" style="top: -10px ; float: right; height: 30px; width: 30px;" (click)="AgregarFoto()">\n\n      <input type="file" accept="image/jpeg" #fileInput style="display:none; " class="form-control" (change)="ProcessImage($event)"\n\n      />\n\n      <ion-icon name="add" color="primary"></ion-icon>\n\n    </button>\n\n    <ion-label style="text-align: center"> {{ArrayFotos.length}} de 6</ion-label>\n\n    <div class="general" *ngFor="let foto of ArrayFotos">\n\n      <ion-card style="height: 70%; width: 70%; margin: auto" padding (click)="SeleccionarFoto(foto);" [ngStyle]="{\'border\': (foto.FOTactiva) ? \'3px solid blue\' : \'\' }">\n\n        <img src="{{foto.FOTurl}}" width="70" height="70" onerror="this.src=\'assets/icon/picture.svg\';" />\n\n      </ion-card>\n\n    </div>\n\n  </ion-card>\n\n\n\n\n\n</div>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\imagenes\imagenes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_general_Establecimiento__["a" /* EstablecimientoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_general_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */]])
    ], ImagenesComponent);
    return ImagenesComponent;
}());

//# sourceMappingURL=imagenes.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionGeneralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOusuario__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelos_DTOestablecimiento__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_general_user__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InformaconGeneralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InformacionGeneralComponent = /** @class */ (function () {
    function InformacionGeneralComponent(ESTservice, USUservice) {
        this.ESTservice = ESTservice;
        this.USUservice = USUservice;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOusuario__["a" /* DTOusuario */];
        this.establecimiento = new __WEBPACK_IMPORTED_MODULE_3__modelos_DTOestablecimiento__["a" /* DTOEstablecimiento */];
        console.log('Hello InformacionGeneralComponent Component');
        this.text = 'Hello World';
    }
    InformacionGeneralComponent.prototype.ngOnInit = function () {
        this.obtenerEST();
        this.obtenerUSU();
    };
    InformacionGeneralComponent.prototype.obtenerUSU = function () {
        this.usuario = this.USUservice.user;
    };
    InformacionGeneralComponent.prototype.GuardarUSU = function () {
        this.USUservice.guardarBd();
    };
    InformacionGeneralComponent.prototype.obtenerEST = function () {
        this.establecimiento = this.ESTservice.establecimiento;
    };
    InformacionGeneralComponent.prototype.GuardarEST = function () {
        this.ESTservice.guardarBd();
    };
    InformacionGeneralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'informacion-general',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\establecimiento\informacion-general\informacion-general.html"*/'<!-- Generated template for the InformaconGeneralComponent component -->\n\n<ion-card>\n\n  <ion-card-title style="text-align: center;">\n\n    Informacion General\n\n  </ion-card-title>\n\n  <ion-card-content>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h2 style="text-align: center">Establecimiento</h2>\n\n        <ion-item>\n\n          <ion-label stacked required>Nit</ion-label>\n\n          <ion-input [(ngModel)]="establecimiento.ESTnit" type="number" required (blur)="GuardarEST()"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked required>Nombre del establecimiento</ion-label>\n\n          <ion-input [(ngModel)]="establecimiento.ESTnombre" type="text" required (blur)="GuardarEST()"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked required>Telefono recepción</ion-label>\n\n          <ion-input [(ngModel)]="establecimiento.ESTtelefono" type="text" required (blur)="GuardarEST()"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h2 style="text-align: center">Contacto</h2>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Primer nombre *</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUprimerNombre" type="text" (blur)="GuardarUSU()"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Segundo nombre</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUsegundoNombre" type="text" (blur)="GuardarUSU()"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Primer apellido *</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUprimerApellido" type="text" (blur)="GuardarUSU()"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Segundo apellido</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUsegundoApellido" type="text" (blur)="GuardarUSU()"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Num. identificación *</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUidentificacion" type="number" (blur)="GuardarUSU()"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Ciudad</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUciudad" type="text" (blur)="GuardarUSU()"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Correo electronico *</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUemail" type="email"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked required>Celular *</ion-label>\n\n              <ion-input [(ngModel)]="usuario.USUcelular" type="number" (blur)="GuardarUSU()"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\establecimiento\informacion-general\informacion-general.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_general_Establecimiento__["a" /* EstablecimientoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_general_user__["a" /* UserProvider */]])
    ], InformacionGeneralComponent);
    return InformacionGeneralComponent;
}());

//# sourceMappingURL=informacion-general.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mapa_mapa__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelos_DTOestablecimiento__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelos_DTOposicion__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UbicacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UbicacionComponent = /** @class */ (function () {
    function UbicacionComponent(googleMaps, ESTservice) {
        this.googleMaps = googleMaps;
        this.ESTservice = ESTservice;
        this.establecimiento = new __WEBPACK_IMPORTED_MODULE_2__modelos_DTOestablecimiento__["a" /* DTOEstablecimiento */];
        console.log('Hello UbicacionComponent Component');
        this.text = 'Hello World';
        //this.getPosition();
    }
    UbicacionComponent.prototype.ngOnInit = function () {
        this.obtenerEST();
    };
    UbicacionComponent.prototype.obtenerEST = function () {
        var _this = this;
        this.establecimiento = this.ESTservice.establecimiento;
        this.googleMaps.posicion(this.mapElement.nativeElement, this.establecimiento.ESTgeolocalizacion);
        this.googleMaps.posicionActual.subscribe(function (valor) {
            _this.establecimiento.ESTgeolocalizacion = new __WEBPACK_IMPORTED_MODULE_4__modelos_DTOposicion__["a" /* DTOposicion */];
            _this.establecimiento.ESTgeolocalizacion.latitude = valor.latitude;
            _this.establecimiento.ESTgeolocalizacion.longitude = valor.longitude;
            _this.GuardarEST();
        });
    };
    UbicacionComponent.prototype.GuardarEST = function () {
        this.ESTservice.guardarBd();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], UbicacionComponent.prototype, "mapElement", void 0);
    UbicacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ubicacion',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\establecimiento\ubicacion\ubicacion.html"*/'<!-- Generated template for the UbicacionComponent component -->\n\n\n\n<ion-row>\n\n  <ion-col style="max-width: 500px">\n\n    <ion-card >\n\n      <ion-card-header style="text-align: center">\n\n        Ubicacion\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label floating>Ciudad</ion-label>\n\n          <ion-input [(ngModel)]="establecimiento.ESTciudad"  type="text" (blur)="GuardarEST()"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating> Localidad</ion-label>\n\n          <ion-input [(ngModel)]="establecimiento.ESTlocalidad" type="text" (blur)="GuardarEST()"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Direccion</ion-label>\n\n          <ion-input [(ngModel)]="establecimiento.ESTdireccion" type="text" (blur)="GuardarEST()"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-col>\n\n  <ion-col style="height: 350px">\n\n    <div #map id="map"></div>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\establecimiento\ubicacion\ubicacion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mapa_mapa__["a" /* MapaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_general_Establecimiento__["a" /* EstablecimientoProvider */]])
    ], UbicacionComponent);
    return UbicacionComponent;
}());

//# sourceMappingURL=ubicacion.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelos_DTOposicion__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MapaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MapaProvider = /** @class */ (function () {
    function MapaProvider() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.posicionActual = this.subject.asObservable();
        this.geoUbicacion = new __WEBPACK_IMPORTED_MODULE_2__modelos_DTOposicion__["a" /* DTOposicion */];
        console.log('Hello MapaProvider Provider');
    }
    MapaProvider.prototype.posicion = function (mapElement, posicion) {
        this.mapElement = mapElement;
        if (posicion) {
            var cordenadas = {
                lat: posicion.latitude,
                lng: posicion.longitude
            };
            this.crearMapa(cordenadas);
            // this.subject.next(posicion);
        }
        else {
            var that_1 = this;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var cordenadas = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    that_1.crearMapa(cordenadas);
                });
            }
        }
    };
    MapaProvider.prototype.crearMapa = function (posicion) {
        this.map = new google.maps.Map(this.mapElement, {
            center: posicion,
            zoom: 16,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        });
        this.Marca(posicion);
    };
    MapaProvider.prototype.Marca = function (posicion) {
        var that = this;
        var marker = new google.maps.Marker({
            position: posicion,
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
        });
        var infowindow = new google.maps.InfoWindow({
            content: "<strong>Arrastrame para conocer mejor la ubicación del establecimiento</strong>"
        });
        infowindow.open(this.map, marker);
        this.geoUbicacion.latitude = posicion.lat;
        this.geoUbicacion.longitude = posicion.lng;
        this.subject.next(that.geoUbicacion);
        google.maps.event.addListener(marker, 'dragend', function (event) {
            that.geoUbicacion.latitude = this.position.lat();
            that.geoUbicacion.longitude = this.position.lng();
            that.subject.next(that.geoUbicacion);
        });
    };
    MapaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapaProvider);
    return MapaProvider;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarTipHabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_habitacion_tipo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegistarTipHabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegistrarTipHabComponent = /** @class */ (function () {
    function RegistrarTipHabComponent(TIHservice, alertCtrl) {
        this.TIHservice = TIHservice;
        this.alertCtrl = alertCtrl;
        this.CantHabilitar = false;
        this.HabitacionTipo = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__["b" /* DTOHabitacionTipo */];
        console.log('Hello RegistarTipHabComponent Component');
        //this.HabitacionTipo = obj ? obj : new DTOHabitaciontipo;
        // this.ArrayComplementos = [
        //   {COMid: "" , COMdescripcion: "Parqueadero"}]
    }
    RegistrarTipHabComponent.prototype.ngOnInit = function () {
        this.HabitacionTipo = this.TIHservice.habitacionTipo;
        this.CantHabilitar = (this.HabitacionTipo.HTIestado === __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__["d" /* HTIenumEstado */].Registrando) ? false : true;
        this.validacionCampos();
    };
    RegistrarTipHabComponent.prototype.validarCantidad = function () {
        this.HabitacionTipo.HTIcantidad = (this.HabitacionTipo.HTIcantidad > 50 || this.HabitacionTipo.HTIcantidad === 0 || this.HabitacionTipo.HTIcantidad === undefined) ? null : this.HabitacionTipo.HTIcantidad;
        this.controlCantidad();
    };
    RegistrarTipHabComponent.prototype.Alertas = function (message) {
        var alert = this.alertCtrl.create({
            title: message,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    RegistrarTipHabComponent.prototype.EsNumerico = function (evt) {
        var event;
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    RegistrarTipHabComponent.prototype.controlCantidad = function () {
        if (this.HabitacionTipo.HTIcantidad <= 0) {
            document.getElementById("continuar").setAttribute('disabled', 'disabled');
            this.CantHab.setFocus();
        }
        else {
            document.getElementById("continuar").removeAttribute('disabled');
        }
    };
    RegistrarTipHabComponent.prototype.validacionCampos = function () {
        var _a = this.HabitacionTipo, _b = _a.HTInombre, HTInombre = _b === void 0 ? "" : _b, _c = _a.HTIdescripcion, HTIdescripcion = _c === void 0 ? "" : _c;
        document.getElementById("continuar").setAttribute('disabled', 'disabled');
        switch ("") {
            case HTInombre: {
                document.getElementById("error").innerHTML = "Registre el nombre de la habitación";
                break;
            }
            case HTIdescripcion: {
                document.getElementById("error").innerHTML = "Registre la descripcion de la habitación";
                break;
            }
            default: {
                document.getElementById("error").innerHTML = "";
                document.getElementById("continuar").removeAttribute('disabled');
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('CantHab'),
        __metadata("design:type", Object)
    ], RegistrarTipHabComponent.prototype, "CantHab", void 0);
    RegistrarTipHabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'registrar-tip-hab',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\registrar\registrar-tip-hab.html"*/'<!-- Generated template for the RegistarTipHabComponent component -->\n\n<ion-card style="width: 60%; margin:auto;">\n\n  <ion-card-header>\n\n    <ion-card-title color="principal" style="text-align: center;">\n\n      Registrar tipo de habitación\n\n    </ion-card-title>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <label style="white-space: inherit; color: darkgrey">Para el conocimiento de los usuarios y mejorar la calidad de la\n\n      administracion de su establecimiento, por favor ingrese\n\n      los valores solicitados\n\n    </label>\n\n    <!-- <ion-item>\n\n          <ion-label color="primary"> Id:</ion-label>\n\n          <ion-input placeholder="ej: Suite, Sencilla" [(ngModel)]="HabitacionTipo.HTIid" type="number"></ion-input>\n\n        </ion-item> -->\n\n    <ion-item>\n\n      <ion-label color="principal"> Nombre:</ion-label>\n\n      <ion-input placeholder="ej: Suite, Sencilla" [(ngModel)]="HabitacionTipo.HTInombre" type="text" (ionBlur)="validacionCampos()"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="principal"> Descripción:</ion-label>\n\n      <ion-textarea placeholder="Indica los detalles generales de este tipo de habitación" [(ngModel)]="HabitacionTipo.HTIdescripcion" maxlength="200" (ionBlur)="validacionCampos()" rows="4"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="principal" required> Cantidad de habitaciones:</ion-label>\n\n      <ion-input #CantHab placeholder="ingrese un valor entre 1 y 50 " clearInput [(ngModel)]="HabitacionTipo.HTIcantidad"\n\n        type="number" min="1" max="50" (ionBlur)="validarCantidad()" (keypress)="EsNumerico($event)" [disabled]="CantHabilitar"></ion-input>\n\n    </ion-item>\n\n    <ion-label class="mjsError" id="error"></ion-label>\n\n    <!-- * La cantidad de habitaciones, no puede ser menor a 0 o mayor a 50 -->\n\n    <ion-row>\n\n      <ion-col>\n\n        <complementos [habitacion]="HabitacionTipo"></complementos>\n\n      </ion-col>\n\n      <ion-col>\n\n        <entretenimientos [habitacion]="HabitacionTipo"></entretenimientos>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\registrar\registrar-tip-hab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], RegistrarTipHabComponent);
    return RegistrarTipHabComponent;
}());

//# sourceMappingURL=registrar-tip-hab.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarifasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_general_habitacion_tipo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_tarifasService__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TarifasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TarifasComponent = /** @class */ (function () {
    function TarifasComponent(HABservice, TARservice, alertCtrl) {
        this.HABservice = HABservice;
        this.TARservice = TARservice;
        this.alertCtrl = alertCtrl;
        this.Arraytarifa = new Array();
        console.log('Hello TarifasComponent Component');
        this.text = 'Hello World';
    }
    TarifasComponent.prototype.ngOnInit = function () {
        if (this.HABservice.habitacionTipo.HTItarifas)
            this.Arraytarifa = this.HABservice.habitacionTipo.HTItarifas;
        else
            this.AgregarTarifa();
        this.TARservice.ArrayTarifa = this.Arraytarifa;
    };
    TarifasComponent.prototype.ngOnDestroy = function () {
    };
    TarifasComponent.prototype.cambiarValor = function (id) {
        document.getElementById('lblValor_' + id).style.display = "none";
        document.getElementById('txtValor_' + id).style.display = "block";
        document.getElementById('txtValor_' + id).focus();
    };
    TarifasComponent.prototype.actualizarValor = function (id) {
        document.getElementById('txtValor_' + id).style.display = "none";
        document.getElementById('lblValor_' + id).style.display = "block";
    };
    TarifasComponent.prototype.Alertas = function (message) {
        var alert = this.alertCtrl.create({
            title: message,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    TarifasComponent.prototype.AgregarTarifa = function () {
        if (this.Arraytarifa.length == 6) {
            this.Alertas('Ha superado el limite de tarifas');
            return;
        }
        this.Arraytarifa = this.TARservice.AgregarTarifa();
        this.HABservice.habitacionTipo.HTItarifas = this.Arraytarifa;
    };
    TarifasComponent.prototype.EliminarTarifa = function (tarifa) {
        this.Arraytarifa = this.TARservice.EliminarTarifa(tarifa);
        this.HABservice.habitacionTipo.HTItarifas = this.Arraytarifa;
    };
    TarifasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tarifas',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\tarifas\tarifas.html"*/'<!-- Generated template for the TarifasComponent component -->\n\n<ion-card class="content">\n\n  <button ion-fab mini style="float: right;" (click)="AgregarTarifa()">\n\n    <ion-icon name="add" color="primary"></ion-icon>\n\n  </button>\n\n  <ion-grid class="col">\n\n    <ion-row align-items-center>\n\n      <ion-col align-self-center>\n\n        <ion-label> Tarifas</ion-label>\n\n      </ion-col>\n\n      <ion-col align-self-center>\n\n        <ion-label> Cantidad de horas</ion-label>\n\n      </ion-col>\n\n      <ion-col align-self-center>\n\n        <ion-label> Valor total</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row align-items-center *ngFor="let tarifa of Arraytarifa; index as i">\n\n      <ion-col align-self-center>\n\n        <ion-label>{{i+1}}</ion-label>\n\n      </ion-col>\n\n      <ion-col align-self-center>\n\n        <label>{{tarifa.TARcantHoras}} hrs</label>\n\n        <ion-range min="1" max="24" [(ngModel)]="tarifa.TARcantHoras">\n\n          <ion-label range-left> 1</ion-label>\n\n          <ion-label range-right>24</ion-label>\n\n        </ion-range>\n\n      </ion-col>\n\n      <ion-col align-self-center>\n\n        <input id="txtValor_{{tarifa.TARid}}" [(ngModel)]="tarifa.TARvalor" type="number" style="display: none; border: none; width: 100px; margin: auto;"\n\n          (blur)="actualizarValor(tarifa.TARid)" />\n\n        <ion-label id="lblValor_{{tarifa.TARid}}" (click)="cambiarValor(tarifa.TARid)" style="cursor: text">{{ tarifa.TARvalor | currency:\'USD\':true:\'.0\'}}</ion-label>\n\n        <button ion-fab mini style="float: right;" (click)="EliminarTarifa(tarifa)">\n\n          <ion-icon name="close" color="danger"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-card>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\tarifas\tarifas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_general_tarifasService__["a" /* TarifasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_tarifasService__["a" /* TarifasProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], TarifasComponent);
    return TarifasComponent;
}());

//# sourceMappingURL=tarifas.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_administracion_administracion_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_configuracionGeneral_configuracion_configuracion_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_general_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_general_habitacion_tipo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_general_storage__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { HabitacionProvider } from '../providers/general/habitacion';
var firebaseConfig = {
    apiKey: "AIzaSyASR-VQFfepVIDxJz_tLRzK7mrJNz_MtB0",
    authDomain: "mote-e0df6.firebaseapp.com",
    databaseURL: "https://mote-e0df6.firebaseio.com",
    projectId: "mote-e0df6",
    storageBucket: "mote-e0df6.appspot.com",
    messagingSenderId: "1075024717028"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_administracion_administracion_module__["AdministracionPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_configuracionGeneral_configuracion_configuracion_module__["ConfiguracionPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/administracion/administracion.module#AdministracionPageModule', name: 'AdministracionPage', segment: 'administracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracionGeneral/configuracion/configuracion.module#ConfiguracionPageModule', name: 'ConfiguracionPage', segment: 'configuracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracionGeneral/establecimiento/establecimiento.module#EstablecimientoPageModule', name: 'EstablecimientoPage', segment: 'establecimiento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracionGeneral/tipos-habitaciones/tipos-habitaciones.module#TiposHabitacionesPageModule', name: 'TiposHabitacionesPage', segment: 'tipos-habitaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__["a" /* AngularFireStorageModule */],
                //AngularFireDatabaseModule,
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                //AngularFireDatabase,
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_general_Establecimiento__["a" /* EstablecimientoProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_general_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_general_storage__["a" /* StorageProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HabitacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HabitacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HabitacionComponent = /** @class */ (function () {
    // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'superman', 'spiderman', 'ironman'];
    function HabitacionComponent() {
        console.log('Hello HabitacionesComponent Component');
        this.text = 'Hello World';
    }
    HabitacionComponent.prototype.carga = function () {
        var _this = this;
        var contador_s = 5;
        var contador_m = 0;
        var contador_h = 1;
        var segundos = document.getElementById("segundos_" + this.Habitacion.HITid);
        var minutos = document.getElementById("minutos_" + this.Habitacion.HITid);
        var horas = document.getElementById("horas_" + this.Habitacion.HITid);
        horas.innerText = contador_h.toString();
        minutos.innerText = contador_m.toString();
        this.cronometro = setInterval(function () {
            if (contador_s <= 0) {
                contador_s = 60;
                if (contador_m == 0 && contador_h == 0) {
                    clearInterval(_this.cronometro);
                    return;
                }
                else if (contador_m <= 0) {
                    contador_m = 60;
                    contador_h--;
                    horas.innerText = contador_h.toString();
                }
                contador_m--;
                minutos.innerText = contador_m.toString();
            }
            contador_s--;
            segundos.innerText = contador_s.toString();
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__["a" /* DTOHabitacionItem */])
    ], HabitacionComponent.prototype, "Habitacion", void 0);
    HabitacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'habitacion',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\administracion\habitaciones\habitacion.html"*/'<ion-card class="habitacion">\n\n      <ion-card-header style="margin-left: -15px; margin-top: -20px">\n\n            <ion-label class="estado semantica">\n\n                  {{Habitacion.HITestado}}\n\n            </ion-label>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n            <ion-label>{{Habitacion.HITidentidad}}</ion-label>\n\n            <!-- <ion-item style="text-align: center; background-color: #d0cccc; border-radius: 25px">\n\n                  <ion-icon name="radio-button-on" color="danger"></ion-icon>\n\n            </ion-item> -->\n\n            \n\n            Tiempo restante\n\n            <ion-label>\n\n                  <label id="horas_{{Habitacion.HITid}}">0</label>:\n\n                  <label id="minutos_{{Habitacion.HITid}}">0</label>:\n\n                  <label id="segundos_{{Habitacion.HITid}}">0</label>\n\n            </ion-label>\n\n            <button (click)="carga()"></button>\n\n      </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\administracion\habitaciones\habitacion.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HabitacionComponent);
    return HabitacionComponent;
}());

//# sourceMappingURL=habitacion.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        console.log('Hello ProgressBarComponent Component');
        this.text = 'Hello World';
    }
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\progress-bar\progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n\n<div>\n\n  <ion-item></ion-item>\n\n</div>\n\n'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wizard_directive__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WizardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var WizardComponent = /** @class */ (function () {
    function WizardComponent(navCtrl, componentFactoryResolver) {
        this.navCtrl = navCtrl;
        this.componentFactoryResolver = componentFactoryResolver;
        this.finalizar = false;
        console.log('Hello WizardComponent Component');
    }
    WizardComponent.prototype.ngOnInit = function () {
        this.ComponenteInicial();
    };
    WizardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    WizardComponent.prototype.ComponenteInicial = function () {
        this.posicion = this.paginas.findIndex(function (index) { return index.activo === true; });
        var componenteActual = this.paginas[this.posicion];
        this.cargarComponente(componenteActual);
    };
    WizardComponent.prototype.Continuar = function () {
        this.paginas[this.posicion].activo = false;
        this.posicion = (this.posicion + 1) % this.paginas.length;
        this.paginas[this.posicion].activo = true;
        this.cargarComponente(this.paginas[this.posicion]);
        if (this.posicion + 1 == this.paginas.length) {
            this.finalizar = true;
        }
        else {
            this.finalizar = false;
        }
    };
    WizardComponent.prototype.Regresar = function () {
        this.paginas[this.posicion].activo = false;
        this.posicion = (this.posicion - 1) % this.paginas.length;
        this.paginas[this.posicion].activo = true;
        this.cargarComponente(this.paginas[this.posicion]);
        if (this.posicion + 1 == this.paginas.length) {
            this.finalizar = true;
        }
        else {
            this.finalizar = false;
        }
    };
    WizardComponent.prototype.Finalizar = function () {
        this.navCtrl.setRoot("ConfiguracionPage");
    };
    WizardComponent.prototype.cargarComponente = function (ComponenteActual) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponenteActual.component);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        // (<any>componentRef.instance).data = ComponenteActual.data;
    };
    WizardComponent.prototype.getAds = function () {
        // this.interval = setInterval(() => {
        //this.loadComponent();
        // }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], WizardComponent.prototype, "paginas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__wizard_directive__["a" /* WizardDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__wizard_directive__["a" /* WizardDirective */])
    ], WizardComponent.prototype, "adHost", void 0);
    WizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wizard',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\wizard\wizard.html"*/'<!-- Generated template for the WizardComponent component -->\n\n<div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-row style="margin: auto; ">\n\n        <ion-col *ngFor="let pagina of paginas" style="margin: auto; max-width: 80px;">\n\n          <label ion-fab [ngStyle]="{\'border\': (pagina.activo) ? \'3px solid #32db64\' : \'\' }" title="{{pagina.titulo}}" id="btnInfGeneral">\n\n            <ion-icon name="{{pagina.iconName}}" color="principal" style="font-size: 30px;"></ion-icon>\n\n          </label>\n\n          <label style=" border: 10px solid transparent; border-bottom-color: #5bc0de; margin-left: 15px;"></label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button (click)="Regresar()" round *ngIf="posicion > 0">\n\n        Regresar\n\n      </button>\n\n    </ion-col>\n\n    <ion-col style="text-align: right">\n\n      <button id="continuar" ion-button color="secondary" (click)="Continuar()" round *ngIf="!finalizar">\n\n        Continuar\n\n      </button>\n\n      <button ion-button (click)="Finalizar()" round *ngIf="finalizar">\n\n        Finalizar\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ng-template paso-paso></ng-template>\n\n</div>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\wizard\wizard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]])
    ], WizardComponent);
    return WizardComponent;
}());

//# sourceMappingURL=wizard.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTipoHabitacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_habitacion_tipo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TipoHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ItemTipoHabitacionComponent = /** @class */ (function () {
    function ItemTipoHabitacionComponent(navCtrl, TIHservice) {
        this.navCtrl = navCtrl;
        this.TIHservice = TIHservice;
        this.Tipohabitacion = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__["c" /* DTOHabitacionView */];
        console.log('Hello TipoHabitacionComponent Component');
        this.text = 'Hello World';
    }
    ItemTipoHabitacionComponent.prototype.configurarHabitacion = function (id) {
        var _this = this;
        this.TIHservice.inicializar(id).then(function () {
            var ArrayFotos = new Array();
            if (_this.TIHservice.habitacionTipo.HTIfotos) {
                ArrayFotos = _this.TIHservice.habitacionTipo.HTIfotos;
            }
            _this.navCtrl.setRoot("TiposHabitacionesPage", {
                objFotos: ArrayFotos,
                file: "habitacion_" + _this.TIHservice.habitacionTipo.HTIid,
                marca: "HAB"
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemTipoHabitacionComponent.prototype, "Tipohabitacion", void 0);
    ItemTipoHabitacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'Item-tipoHabitacion',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\tipo-habitacion\Item-tipoHabitacion.html"*/'<ion-card>\n\n  <ion-row>\n\n    <ion-col class="contenedorImg">\n\n      <img class="imagen" src="{{Tipohabitacion.HVIfoto}}" class="imagen" onerror="this.src=\'assets/icon/picture.svg\';" />\n\n    </ion-col>\n\n    <ion-col class="contenedorDescripcion">\n\n      <label class="lblName">{{Tipohabitacion.HVInombre}}</label>\n\n      <ion-label class="lblDescripcion">{{Tipohabitacion.HVIdescripcion}}</ion-label>\n\n      <!-- <div class="contenedorStart">\n\n        <div class="lblStart" >\n\n          <label class="icon-start" [ngStyle]="{\'width\' : itemHotel.stars * 2 + \'0px\' , \'background-repeat\': \'space\' , \'background-size\': \'20px\' , \'height\': \'20px\' }" ></label>\n\n        </div>\n\n      </div> -->\n\n      <!-- <div class="contenedorAmenitie">\n\n        <div class="amenitie" *ngFor="let amenitie of itemHotel.amenities">\n\n          <img src="assets/amenities/{{amenitie}}.svg" />\n\n        </div>\n\n      </div> -->\n\n    </ion-col>\n\n    <ion-col class="contenedorValor">\n\n      <label>Tarifa minima</label>\n\n      <ion-label class="lblValor">{{Tipohabitacion.HVItarifaMin | currency:\'USD\':true:\'.0\'}}</ion-label>\n\n      <button ion-button (click)="configurarHabitacion(Tipohabitacion.HVIid)">\n\n        Ver\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-card>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\tipo-habitacion\Item-tipoHabitacion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */]])
    ], ItemTipoHabitacionComponent);
    return ItemTipoHabitacionComponent;
}());

//# sourceMappingURL=Item-tipoHabitacion.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOfoto; });
var DTOfoto = /** @class */ (function () {
    function DTOfoto() {
    }
    return DTOfoto;
}());

//# sourceMappingURL=DTOfoto.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplementosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_general_complemento__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelos_DTOhabitacion__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ComplementosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComplementosComponent = /** @class */ (function () {
    function ComplementosComponent(COMservice) {
        this.COMservice = COMservice;
        this.ArrayComplementos = new Array();
        console.log('Hello ComplementosComponent Component');
        this.text = 'Hello World';
    }
    ComplementosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.COMservice.inicializar().then(function (data) {
            _this.ArrayComplementos = data;
        });
    };
    ComplementosComponent.prototype.checkComplemento = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__modelos_DTOhabitacion__["b" /* DTOHabitacionTipo */])
    ], ComplementosComponent.prototype, "habitacion", void 0);
    ComplementosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'complementos',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\complementos\complementos.html"*/'<!-- Generated template for the ComplementosComponent component -->\n\n<div>\n\n  <ion-label color="principal">Complementos</ion-label>\n\n  <ion-list>\n\n    <ion-item *ngFor="let complemento of ArrayComplementos">\n\n      <ion-label style="display: flex ; align-items: center;">\n\n        <img style="width: 25px; height: 25px; background: #800000; padding: 2px; border-radius: 2px" src="{{complemento.COMicon}}" />\n\n        <label style="padding-left: 15px;">{{complemento.COMdescripcion}}</label>\n\n      </ion-label>\n\n      <ion-checkbox [(ngModel)]="complemento.COMactivo" (ionChange)="checkComplemento()"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\complementos\complementos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_general_complemento__["a" /* ComplementoProvider */]])
    ], ComplementosComponent);
    return ComplementosComponent;
}());

//# sourceMappingURL=complementos.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOcomplemento; });
var DTOcomplemento = /** @class */ (function () {
    function DTOcomplemento() {
    }
    return DTOcomplemento;
}());

//# sourceMappingURL=DTOcomplemento.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarifasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOtarifa__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TarifasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TarifasProvider = /** @class */ (function () {
    function TarifasProvider() {
        this.ArrayTarifa = new Array();
        console.log('Hello TarifasProvider Provider');
    }
    TarifasProvider.prototype.EliminarTarifa = function (tarifa) {
        var posicion;
        posicion = this.ArrayTarifa.findIndex(function (index) { return index === tarifa; });
        this.ArrayTarifa.splice(posicion, 1);
        return this.ArrayTarifa;
    };
    TarifasProvider.prototype.AgregarTarifa = function () {
        var tarifa = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOtarifa__["a" /* DTOtarifa */];
        tarifa.TARid = this.ArrayTarifa.length + 1;
        tarifa.TARcantHoras = 4;
        tarifa.TARvalor = 50000;
        this.ArrayTarifa.push(tarifa);
        return this.ArrayTarifa;
    };
    TarifasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TarifasProvider);
    return TarifasProvider;
}());

//# sourceMappingURL=tarifasService.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOtarifa; });
var DTOtarifa = /** @class */ (function () {
    function DTOtarifa() {
    }
    return DTOtarifa;
}());

//# sourceMappingURL=DTOtarifa.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntretenimientosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EntretenimientosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EntretenimientosComponent = /** @class */ (function () {
    function EntretenimientosComponent() {
        console.log('Hello EntretenimientosComponent Component');
        this.text = 'Hello World entretime';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__modelos_DTOhabitacion__["b" /* DTOHabitacionTipo */])
    ], EntretenimientosComponent.prototype, "habitacion", void 0);
    EntretenimientosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'entretenimientos',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\entretenimientos\entretenimientos.html"*/'<!-- Generated template for the EntretenimientosComponent component -->\n\n<div>\n\n  <ion-label color="principal">Entretenimiento</ion-label>\n\n  <ion-list>\n\n    <ion-item *ngFor="let complemento of ArrayComplementos">\n\n      <ion-label style="display: flex ; align-items: center;">\n\n        <img style="width: 25px; height: 25px;" src="{{complemento.COMicon}}" />\n\n        <label style="padding-left: 15px;">{{complemento.COMdescripcion}}</label>\n\n      </ion-label>\n\n      <ion-checkbox [(ngModel)]="complemento.COMactivo" (ionChange)="checkComplemento()"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\TiposHabitaciones\entretenimientos\entretenimientos.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EntretenimientosComponent);
    return EntretenimientosComponent;
}());

//# sourceMappingURL=entretenimientos.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEstablecimientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViewEstablecimientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ViewEstablecimientoComponent = /** @class */ (function () {
    function ViewEstablecimientoComponent(navCtrl, ESTservice) {
        this.navCtrl = navCtrl;
        this.ESTservice = ESTservice;
        console.log('Hello ViewEstablecimientoComponent Component');
        this.text = 'Hello World';
        this.obtenerEstablecimiento();
    }
    ViewEstablecimientoComponent.prototype.obtenerEstablecimiento = function () {
        this.establecimiento = this.ESTservice.establecimiento;
        this.foto = (this.ESTservice.establecimiento.ESTfotos && this.ESTservice.establecimiento.ESTfotos.length) ? this.ESTservice.establecimiento.ESTfotos.find(function (foto) { return foto.FOTactiva === true; }).FOTurl : "";
    };
    ViewEstablecimientoComponent.prototype.configurarEstablecimiento = function () {
        var ArrayFotos = new Array();
        if (this.ESTservice.establecimiento.ESTfotos) {
            ArrayFotos = this.ESTservice.establecimiento.ESTfotos;
        }
        this.navCtrl.setRoot("EstablecimientoPage", {
            objFotos: ArrayFotos,
            file: "sitio",
            marca: "EST"
        });
    };
    ViewEstablecimientoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'view-establecimiento',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\configuracion\establecimiento\view-establecimiento\view-establecimiento.html"*/'<ion-card>\n\n  <ion-card-header>\n\n    <div class="contenedorImg">\n\n      <img class="imagen" src="{{foto}}" class="imagen" onerror="this.src=\'assets/icon/picture.svg\';" />\n\n    </div>\n\n    <!-- <ion-col class="contenedorDescripcion">\n\n      <label class="lblName">{{Tipohabitacion.HTIdescripcion}}</label>\n\n      <div class="contenedorStart">\n\n        <div class="lblStart" >\n\n          <label class="icon-start" [ngStyle]="{\'width\' : itemHotel.stars * 2 + \'0px\' , \'background-repeat\': \'space\' , \'background-size\': \'20px\' , \'height\': \'20px\' }" ></label>\n\n        </div>\n\n      </div>\n\n       <div class="contenedorAmenitie">\n\n        <div class="amenitie" *ngFor="let amenitie of itemHotel.amenities">\n\n          <img src="assets/amenities/{{amenitie}}.svg" />\n\n        </div>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col class="contenedorValor">\n\n      <label>Tarifa minima</label>\n\n      <ion-label class="lblValor">{{Tipohabitacion.HTItarifaMin | currency:\'USD\':true:\'.0\'}}</ion-label>\n\n      <button ion-button (click)="configurarHabitacion(Tipohabitacion.HTIid)">\n\n        Ver\n\n      </button>\n\n    </ion-col> -->\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <ion-label>{{establecimiento.ESTnombre}}</ion-label>\n\n    <button ion-button (click)="configurarEstablecimiento()">\n\n      Ver\n\n    </button>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\configuracion\establecimiento\view-establecimiento\view-establecimiento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_general_Establecimiento__["a" /* EstablecimientoProvider */]])
    ], ViewEstablecimientoComponent);
    return ViewEstablecimientoComponent;
}());

//# sourceMappingURL=view-establecimiento.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarHabitacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RegistrarHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegistrarHabitacionComponent = /** @class */ (function () {
    function RegistrarHabitacionComponent() {
        console.log('Hello RegistrarHabitacionComponent Component');
        this.text = 'Hello World';
    }
    RegistrarHabitacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'registrar-habitacion',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\components\administracion\registrar-habitacion\registrar-habitacion.html"*/'<!-- Generated template for the RegistrarHabitacionComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\components\administracion\registrar-habitacion\registrar-habitacion.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegistrarHabitacionComponent);
    return RegistrarHabitacionComponent;
}());

//# sourceMappingURL=registrar-habitacion.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_configuracion_Sesion_reestablecer_pass_reestablecer_pass__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_configuracion_Sesion_registro_registro__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.auth.StateSesionValid();
    };
    LoginPage.prototype.SignWithEmail = function () {
        var _this = this;
        this.auth.signInWithEmail(this.email, this.password).then(function (usuario) {
            if (usuario != "true") {
                _this.mensajeError = usuario;
            }
        }).catch(function (error) {
            console.log("error", error);
            _this.mensajeError = "La aplicacion no se encuentra disponible";
        });
    };
    LoginPage.prototype.Crear = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_configuracion_Sesion_registro_registro__["a" /* RegistroComponent */], null, { enableBackdropDismiss: false });
        modal.present();
    };
    LoginPage.prototype.Reestablecer = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_configuracion_Sesion_reestablecer_pass_reestablecer_pass__["a" /* ReestablecerPassComponent */], null, { enableBackdropDismiss: false });
        modal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card style="background: transparent; text-align: center; margin: auto; width: 500px">\n\n    <ion-card-header>\n\n      <ion-card-title>\n\n        Bienvenido a MotEasy\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <label>Ingresa con</label>\n\n      <br>\n\n      <button ion-button icon-left (click)="signInWithFacebook()">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n        facebook\n\n      </button>\n\n      <button ion-button icon-left color="danger" (click)="loginGoogle()">\n\n        <ion-icon name="logo-google"></ion-icon>\n\n        Google\n\n      </button>\n\n      <ion-item style="text-align: center">\n\n        <p class="separador"></p>\n\n      </ion-item>\n\n      <label>o</label>\n\n      <ion-row>\n\n        <ion-col style="margin-top: 30px; max-width: 40px; font-size: 25px;">\n\n          <ion-icon name="mail" ></ion-icon>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating required>Correo electronico</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col style="margin-top: 30px; max-width: 40px; font-size: 25px;">\n\n          <ion-icon name="lock"></ion-icon>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Contraseña</ion-label>\n\n            <ion-input [(ngModel)]="password" type="password"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <button ion-button icon-left color="primary" [disabled]="(!email || !password)" (click)="SignWithEmail()">\n\n        Iniciar sesión\n\n      </button>\n\n      <ion-label color="danger">{{mensajeError}}</ion-label>\n\n      <ion-label color="primary" class="Registrarse" (click)="Reestablecer()">¿Olvidaste tu contraseña?</ion-label>\n\n      <ion-label color="primary" class="Registrarse" (click)="Crear()">Registrate</ion-label>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstablecimientoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelos_DTOestablecimiento__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EstablecimientoProvider = /** @class */ (function () {
    function EstablecimientoProvider(storage, USUservice) {
        this.storage = storage;
        this.USUservice = USUservice;
        this.establecimiento = new __WEBPACK_IMPORTED_MODULE_3__modelos_DTOestablecimiento__["a" /* DTOEstablecimiento */];
        this.storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
        console.log('Hello EstablecimientoTipoProvider Provider');
    }
    EstablecimientoProvider.prototype.crear = function () {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection('Establecimientos')
            .add({}).then(function (response) {
            return response;
        });
    };
    EstablecimientoProvider.prototype.inicializar = function (id) {
        var _this = this;
        return this.consultarBd().then(function (data) {
            if (!data && id) {
                return _this.consultaFb(id);
            }
            return data;
        });
    };
    EstablecimientoProvider.prototype.consultarBd = function () {
        var _this = this;
        return this.storage.get("Establecimiento")
            .then(function (data) {
            _this.establecimiento = JSON.parse(data);
            _this.guardarBd();
            return _this.establecimiento;
        });
    };
    EstablecimientoProvider.prototype.consultaFb = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("Establecimientos").doc(id).get()
            .then(function (data) {
            _this.establecimiento = data.data();
            _this.guardarBd();
            return _this.establecimiento;
        });
    };
    EstablecimientoProvider.prototype.guardarBd = function () {
        var _this = this;
        return this.storage.set("Establecimiento", JSON.stringify(this.establecimiento)).then(function () {
            return _this.establecimiento;
        });
    };
    EstablecimientoProvider.prototype.guardarFb = function () {
        var _this = this;
        var EST = JSON.stringify(this.establecimiento);
        this.USUservice.consultarBd().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("Establecimientos")
                .doc(data.USUestablecimiento)
                .set(JSON.parse(EST))
                .then(function () {
                _this.guardarBd();
            });
        });
    };
    EstablecimientoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__user__["a" /* UserProvider */]])
    ], EstablecimientoProvider);
    return EstablecimientoProvider;
}());

//# sourceMappingURL=Establecimiento.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_administracion_administracion__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_configuracionGeneral_configuracion_configuracion__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.inicializarApp();
        this.cargarMenu();
        this.auth.StateSesion();
    }
    MyApp.prototype.inicializarApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.cargarMenu = function () {
        this.pages = [
            { title: "Administrar habitaciones", component: __WEBPACK_IMPORTED_MODULE_4__pages_administracion_administracion__["a" /* AdministracionPage */], icon: "speedometer", id: 1 },
            { title: "Configuracion", component: __WEBPACK_IMPORTED_MODULE_5__pages_configuracionGeneral_configuracion_configuracion__["a" /* ConfiguracionPage */], icon: "speedometer", id: 2 }
        ];
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Pages</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n  \n\n    <ion-content>\n\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  \n\n  </ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HabitacionTipoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelos_DTOhabitacion__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HabitacionTipoProvider = /** @class */ (function () {
    function HabitacionTipoProvider(storage, USUservice) {
        this.storage = storage;
        this.USUservice = USUservice;
        this.ArrayTipoHAB = new Array();
        this.habitacionTipo = new __WEBPACK_IMPORTED_MODULE_3__modelos_DTOhabitacion__["b" /* DTOHabitacionTipo */];
        console.log('Hello HabitacionTipoProvider Provider');
    }
    HabitacionTipoProvider.prototype.inicializar = function (id) {
        var _this = this;
        return this.consultarBd(id).then(function (data) {
            if (!data) {
                return _this.consultaFb(id);
            }
            return data;
        });
    };
    HabitacionTipoProvider.prototype.consultarBd = function (id) {
        var _this = this;
        return this.storage.get("Hab_" + id)
            .then(function (data) {
            _this.habitacionTipo = JSON.parse(data);
            return _this.habitacionTipo;
        });
    };
    HabitacionTipoProvider.prototype.consultaFb = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.firestore().collection('Establecimientos')
            .doc(this.USUservice.user.USUestablecimiento)
            .collection("HabitacionTipos")
            .doc(id.toString())
            .get()
            .then(function (data) {
            _this.habitacionTipo = data.data();
            _this.guardarBd();
            return _this.habitacionTipo;
        });
    };
    HabitacionTipoProvider.prototype.crear = function () {
        this.habitacionTipo = new __WEBPACK_IMPORTED_MODULE_3__modelos_DTOhabitacion__["b" /* DTOHabitacionTipo */];
        this.habitacionTipo.HTIid = Math.random().toString(36).substring(2);
        this.habitacionTipo.HTIestado = __WEBPACK_IMPORTED_MODULE_3__modelos_DTOhabitacion__["d" /* HTIenumEstado */].Registrando;
        return this.habitacionTipo;
    };
    HabitacionTipoProvider.prototype.guardarFb = function () {
        var _this = this;
        this.habitacionTipo.HTIestado = (this.habitacionTipo.HTIestado === __WEBPACK_IMPORTED_MODULE_3__modelos_DTOhabitacion__["d" /* HTIenumEstado */].Registrando) ? __WEBPACK_IMPORTED_MODULE_3__modelos_DTOhabitacion__["d" /* HTIenumEstado */].Sincronizado : this.habitacionTipo.HTIestado;
        var HAB = JSON.stringify(this.habitacionTipo);
        __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.firestore().collection('Establecimientos')
            .doc(this.USUservice.user.USUestablecimiento)
            .collection("HabitacionTipos")
            .doc(this.habitacionTipo.HTIid.toString())
            .set(JSON.parse(HAB))
            .then(function () {
            _this.guardarBd();
        });
    };
    HabitacionTipoProvider.prototype.guardarBd = function () {
        this.storage.set("Hab_" + this.habitacionTipo.HTIid, JSON.stringify(this.habitacionTipo));
    };
    HabitacionTipoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__user__["a" /* UserProvider */]])
    ], HabitacionTipoProvider);
    return HabitacionTipoProvider;
}());

//# sourceMappingURL=habitacion-tipo.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DTOHabitacionTipo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DTOHabitacionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOHabitacionItem; });
/* unused harmony export DTOHabitacionGestion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HTIenumEstado; });
var DTOHabitacionTipo = /** @class */ (function () {
    function DTOHabitacionTipo() {
    }
    return DTOHabitacionTipo;
}());

var DTOHabitacionView = /** @class */ (function () {
    function DTOHabitacionView() {
    }
    return DTOHabitacionView;
}());

var DTOHabitacionItem = /** @class */ (function () {
    function DTOHabitacionItem() {
    }
    return DTOHabitacionItem;
}());

var DTOHabitacionGestion = /** @class */ (function () {
    function DTOHabitacionGestion() {
    }
    return DTOHabitacionGestion;
}());

var HTIenumEstado;
(function (HTIenumEstado) {
    HTIenumEstado["Registrando"] = "REG";
    HTIenumEstado["Sincronizado"] = "SIC";
    HTIenumEstado["Administrado"] = "ADM";
})(HTIenumEstado || (HTIenumEstado = {}));
//# sourceMappingURL=DTOhabitacion.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOusuario__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(storage) {
        this.storage = storage;
        console.log('Hello UserProvider Provider');
        this.user = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOusuario__["a" /* DTOusuario */];
    }
    UserProvider.prototype.crear = function (usuario) {
        var _this = this;
        var USU = JSON.stringify(usuario);
        __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.firestore().collection('Usuarios')
            .doc(usuario.USUid)
            .set(JSON.parse(USU))
            .then(function () {
            _this.user = usuario;
            _this.guardarBd();
        });
    };
    UserProvider.prototype.inicializar = function (id) {
        var _this = this;
        return this.consultarBd().then(function (data) {
            if (!data && id) {
                return _this.consultaFb(id);
            }
            return data;
        });
    };
    UserProvider.prototype.consultarBd = function () {
        var _this = this;
        return this.storage.get("User")
            .then(function (data) {
            _this.user = JSON.parse(data);
            return _this.user;
        });
    };
    UserProvider.prototype.consultaFb = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.firestore().collection('Usuarios').doc(id).get()
            .then(function (data) {
            _this.user = data.data();
            _this.guardarBd();
            return _this.user;
        });
    };
    UserProvider.prototype.guardarBd = function () {
        return this.storage.set("User", JSON.stringify(this.user));
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOEstablecimiento; });
var DTOEstablecimiento = /** @class */ (function () {
    function DTOEstablecimiento() {
    }
    return DTOEstablecimiento;
}());

//# sourceMappingURL=DTOestablecimiento.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_Establecimiento__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(app, afAuth, 
        //private fb: Facebook,
        loadingCtrl, 
        //private googlePlus: GooglePlus,
        toastCtrl, 
        //public firebaseAng: AngularFirestore
        USUservice, USUestablecimiento) {
        this.app = app;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.USUservice = USUservice;
        this.USUestablecimiento = USUestablecimiento;
        console.log('Hello AuthProvider Provider');
        this.loading = this.loadingCtrl.create({
            content: 'Iniciando sesión'
        });
    }
    Object.defineProperty(AuthProvider.prototype, "navCtrl", {
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AuthProvider.prototype.StateSesion = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (usuario) {
            if (usuario) {
                _this.consultar(usuario.uid).then(function (data) {
                    _this.USUestablecimiento.inicializar(data.USUestablecimiento).then(function (data) {
                        _this.navCtrl.setRoot('ConfiguracionPage');
                    });
                });
            }
            else {
                _this.navCtrl.setRoot('LoginPage');
            }
        });
    };
    AuthProvider.prototype.StateSesionValid = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (usuario) {
            if (usuario) {
                _this.navCtrl.setRoot('ConfiguracionPage');
            }
        });
    };
    // signInWithGoogle() {
    //   this.loading.present();
    //   var isWeb = document.URL.startsWith('http');
    //   if (!isWeb) {
    //     this.googlePlus.login({
    //       'webClientId': '1075024717028-5mc24hd4dcdhss32rifdau2b40c0c3j0.apps.googleusercontent.com',
    //       'offline': true
    //     }).then(res => {
    //       firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
    //         .then(success => {
    //           console.log("Firebase success: " + JSON.stringify(success));
    //           this.loading.dismiss();
    //         }).catch(error => {
    //           this.loading.dismiss();
    //           console.log("Firebase failure: " + JSON.stringify(error));
    //         });
    //     });
    //   } else {
    //     this.afAuth.auth
    //       .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //       .then(res => {
    //         this.loading.dismiss()
    //       }).catch(err => {
    //         this.loading.dismiss();
    //       });
    //   }
    // }
    // signInWithFacebook() {
    //   this.loading.present();
    //   if (this.platform.is('cordova')) {
    //     return this.fb.login(['email', 'public_profile']).then(res => {
    //       const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    //       this.loading.dismiss();
    //       return firebase.auth().signInWithCredential(facebookCredential);
    //     }).catch(err => {
    //       console.log(err);
    //       this.loading.dismiss();
    //       this.presentToast("Error en la autenticación: " + err);
    //     })
    //   }
    //   else {
    //     this.loading.present();
    //     return this.afAuth.auth
    //       .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //       .then(res => {
    //         this.loading.dismiss();;
    //       }).catch(err => {
    //         console.log(err);
    //         this.loading.dismiss();
    //         this.presentToast("Error en la autenticación: " + err);
    //       });
    //   }
    // }
    AuthProvider.prototype.createEmail = function (usuario, password) {
        var _this = this;
        var respuesta = "";
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(usuario.USUemail, password).then(function (response) {
            usuario.USUid = response.uid;
            _this.crearEstablecimiento(usuario);
            _this.verificarEmail();
            return "true";
        }).catch(function (error) {
            //console.log("error", error);
            switch (error.code) {
                case 'auth/email-already-in-use': {
                    respuesta = "La dirección de correo electrónico ya está siendo utilizada por otra cuenta.";
                    break;
                }
                case 'auth/invalid-email': {
                    respuesta = "Correo no valido";
                    break;
                }
                default: {
                    respuesta = "Error del servidor, pongase en contacto con el administrador";
                    break;
                }
            }
            _this.SignOut();
            return respuesta;
        });
    };
    AuthProvider.prototype.verificarEmail = function () {
        localStorage.setItem('Verficiado', 'red');
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser;
        user.sendEmailVerification();
    };
    AuthProvider.prototype.signInWithEmail = function (email, password) {
        var _this = this;
        var respuesta = "";
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(email, password).then(function (usuario) {
            if (!usuario.emailVerified) {
                _this.verificarEmail();
            }
            _this.consultar(usuario.uid);
            return "true";
        }).catch(function (error) {
            switch (error.code) {
                case 'auth/invalid-email': {
                    respuesta = "Correo y/o contraseña incorrectos";
                    break;
                }
                case 'auth/user-not-found': {
                    respuesta = "Usuario no registrado";
                    break;
                }
                case 'auth/wrong-password': {
                    respuesta = "Contraseña incorrecta";
                    break;
                }
                case 'auth/too-many-requests': {
                    respuesta = "Cuenta bloqueada temporalmente debido a una actividad inusual";
                    break;
                }
                default: {
                    respuesta = "Error del servidor, pongase en contacto con el administrador";
                    break;
                }
            }
            return respuesta;
        });
    };
    AuthProvider.prototype.SignOut = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signOut();
    };
    AuthProvider.prototype.crearEstablecimiento = function (usuario) {
        // firebase.firestore().collection('Establecimientos')
        //   .add({}).then(response => {
        //     usuario.USUestablecimiento = response.id;
        //     this.crearUser(usuario);
        //   });
        var _this = this;
        this.USUestablecimiento.crear()
            .then(function (data) {
            usuario.USUestablecimiento = data.id;
            _this.crearUser(usuario);
        });
    };
    AuthProvider.prototype.crearUser = function (usuario) {
        // firebase.firestore().collection('Usuarios')
        //   .doc(usuario.USUid)
        //   .set(usuario)
        //   .then(() => {
        //     this.guardar(usuario);
        //   });
        this.USUservice.crear(usuario);
    };
    AuthProvider.prototype.consultar = function (id) {
        return this.USUservice.inicializar(id).then(function (data) {
            return data;
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__general_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__general_Establecimiento__["a" /* EstablecimientoProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map