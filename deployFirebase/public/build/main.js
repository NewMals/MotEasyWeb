webpackJsonp([1],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__habitaciones_habitaciones__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wizard_wizard_directive__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_tipo_habitacion__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registro_registro__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__habitaciones_habitaciones__["a" /* HabitacionesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_tipo_habitacion__["a" /* TipoHabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__["a" /* InformacionGeneralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__wizard_wizard_directive__["a" /* WizardDirective */],
                __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__["a" /* ImagenesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registro_registro__["a" /* RegistroComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__habitaciones_habitaciones__["a" /* HabitacionesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_tipo_habitacion__["a" /* TipoHabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__["a" /* InformacionGeneralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__["a" /* ImagenesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__["a" /* ImagenesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registro_registro__["a" /* RegistroComponent */]
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__habitaciones_habitaciones__["a" /* HabitacionesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__configuracion_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__configuracion_TiposHabitaciones_tipo_habitacion_tipo_habitacion__["a" /* TipoHabitacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__wizard_wizard__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__configuracion_establecimiento_informacion_general_informacion_general__["a" /* InformacionGeneralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__configuracion_imagenes_imagenes__["a" /* ImagenesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registro_registro__["a" /* RegistroComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 144:
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
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administracion/administracion.module": [
		188
	],
	"../pages/configuracionGeneral/configuracion/configuracion.module": [
		192
	],
	"../pages/configuracionGeneral/establecimiento/establecimiento.module": [
		465,
		0
	],
	"../pages/login/login.module": [
		194
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
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionPageModule", function() { return AdministracionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administracion__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdministracionPageModule = (function () {
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
var AdministracionPage = (function () {
    function AdministracionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tiposHabitacion = new Array();
    }
    AdministracionPage.prototype.ionViewDidLoad = function () {
        this.cargarTipos();
        console.log('ionViewDidLoad AdministracionPage');
    };
    AdministracionPage.prototype.cargarTipos = function () {
        this.tiposHabitacion = [
            {
                TIHidTipo: 1,
                TIHdescripcion: "Sencilla",
                TIHorden: 1
            },
            {
                TIHidTipo: 2,
                TIHdescripcion: "Suite",
                TIHorden: 2
            },
            {
                TIHidTipo: 3,
                TIHdescripcion: "VIP",
                TIHorden: 3
            }
        ];
    };
    AdministracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administracion',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\pages\administracion\administracion.html"*/'<!--\n\n  Generated template for the AdministracionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>administracion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row style="height: 100%">\n\n    <ion-col class="panelIzquierdo">\n\n        <ion-row *ngFor="let tipo of tiposHabitacion" >\n\n          <ion-col>\n\n            <button  class="TipoHabitacion">{{tipo.TIHdescripcion}}</button>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-col>\n\n    <ion-col class="panelDerecho">\n\n      <habitaciones></habitaciones>\n\n    </ion-col>\n\n  </ion-row>  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\pages\administracion\administracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AdministracionPage);
    return AdministracionPage;
}());

//# sourceMappingURL=administracion.js.map

/***/ }),

/***/ 190:
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

var WizardDirective = (function () {
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
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
 * Generated class for the RegistroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegistroComponent = (function () {
    function RegistroComponent() {
        console.log('Hello RegistroComponent Component');
        this.text = 'Hello World';
    }
    RegistroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'registro',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\registro\registro.html"*/'<!-- Generated template for the RegistroComponent component -->\n<ion-card style="height: 100%; text-align: center">\n  <ion-card-header>\n\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-item>\n      <ion-label  required>Correo electronico</ion-label>\n      <ion-input [(ngModel)]="email" type="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label required>Contraseña</ion-label>\n      <ion-input [(ngModel)]="password" type="password"></ion-input>\n    </ion-item>\n  </ion-card-content>\n  <button ion-button icon-left color="primary" (click)="SignWithEmail()">\n    Crear\n  </button>\n  <button ion-button icon-left color="primary">\n    Cancelar\n  </button>\n</ion-card>'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\registro\registro.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function() { return ConfiguracionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracion__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfiguracionPageModule = (function () {
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
            ]
        })
    ], ConfiguracionPageModule);
    return ConfiguracionPageModule;
}());

//# sourceMappingURL=configuracion.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
var ConfiguracionPage = (function () {
    function ConfiguracionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.text = 'progress-bar';
    }
    ConfiguracionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracionPage');
    };
    ConfiguracionPage.prototype.configurarEstablecimiento = function () {
        this.navCtrl.setRoot("EstablecimientoPage");
    };
    ConfiguracionPage.prototype.configurarHabitacion = function () {
        this.navCtrl.setRoot("");
    };
    ConfiguracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracion',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\pages\configuracionGeneral\configuracion\configuracion.html"*/'<!--\n\n  Generated template for the ConfiguracionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>configuracion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="general">\n\n    <ion-card>\n\n      <progress-bar></progress-bar>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <ion-card-title>Motel</ion-card-title>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item (click)="configurarEstablecimiento()">\n\n          Registrar ubicacion\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-header>\n\n          <ion-card-title>Tipos de habitación</ion-card-title>        \n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item  (click)="configurarHabitacion()">\n\n          Agrega tarifas\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\pages\configuracionGeneral\configuracion\configuracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());

//# sourceMappingURL=configuracion.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_registro_registro__ = __webpack_require__(191);
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
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, auth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.SignWithEmail = function () {
        var _this = this;
        this.auth.signInWithEmail().then(function (usuario) {
            console.log("Login", usuario);
            if (usuario.code) {
                _this.mensajeError = "Correo y/o contraseña incorrectos";
            }
        }).catch(function (error) {
            console.log("error", error);
            _this.mensajeError = "La aplicacion no se encuentra disponible";
        });
    };
    LoginPage.prototype.Crear = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_registro_registro__["a" /* RegistroComponent */]);
        modal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card style="background: transparent; text-align: center; margin: auto; width: 500px">\n    <ion-card-header>\n      <ion-card-title>\n        Bienvenido a MotEasy\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <label>Ingresa con</label>\n      <br>\n      <button ion-button icon-left (click)="signInWithFacebook()">\n        <ion-icon name="logo-facebook"></ion-icon>\n        facebook\n      </button>\n      <button ion-button icon-left color="danger" (click)="loginGoogle()">\n        <ion-icon name="logo-google"></ion-icon>\n        Google\n      </button>\n      <ion-item style="text-align: center">\n        <p class="separador"></p>\n      </ion-item>\n      <label>o</label>\n      <ion-row>\n        <ion-col style="margin-top: 30px; max-width: 40px; font-size: 25px;">\n          <ion-icon name="mail" ></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating required>Correo electronico</ion-label>\n            <ion-input [(ngModel)]="email" type="email"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style="margin-top: 30px; max-width: 40px; font-size: 25px;">\n          <ion-icon name="lock"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input [(ngModel)]="password" type="password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <button ion-button icon-left color="primary" [disabled]="(!email || !password)" (click)="SignWithEmail()">\n        Iniciar sesión\n      </button>\n      <ion-label color="danger">{{mensajeError}}</ion-label>\n      <ion-label color="primary" class="Registrarse" (click)="Crear()">Registrarse</ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(202);
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
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(app, afAuth, 
        //private fb: Facebook,
        platform, loadingCtrl, 
        //private googlePlus: GooglePlus,
        toastCtrl) {
        var _this = this;
        this.app = app;
        this.afAuth = afAuth;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        console.log('Hello AuthProvider Provider');
        this.loading = this.loadingCtrl.create({
            content: 'Iniciando sesión'
        });
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.navCtrl.setRoot('LoginPage');
                return;
            }
            //this.navCtrl.setRoot('ConfiguracionPage');
        });
    }
    Object.defineProperty(AuthProvider.prototype, "navCtrl", {
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
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
    AuthProvider.prototype.signOut = function () {
        var _this = this;
        this.navCtrl.push('LoginPage').then(function () {
            _this.afAuth.auth.signOut().then(function () {
            }).catch(function (err) {
                console.log("Error logout", err);
            });
        });
    };
    AuthProvider.prototype.user = function () {
        return this.afAuth.auth.currentUser;
    };
    AuthProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AuthProvider.prototype.signInWithEmail = function () {
        var email = "michaela.lozanos@ecci.edu.co";
        var password = "1022981042";
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(email, password).then(function (usuario) {
            return usuario;
        }).catch(function (error) {
            return error;
        });
        //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        //     console.log(error.code);
        //     console.log(error.message);
        //  });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionGeneralComponent; });
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
 * Generated class for the InformaconGeneralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InformacionGeneralComponent = (function () {
    function InformacionGeneralComponent() {
        console.log('Hello InformacionGeneralComponent Component');
        this.text = 'Hello World';
    }
    InformacionGeneralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'informacion-general',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\configuracion\establecimiento\informacion-general\informacion-general.html"*/'<!-- Generated template for the InformaconGeneralComponent component -->\n\n<ion-card>\n\n  <ion-card-title style="text-align: center;">\n\n    Informacion General\n\n  </ion-card-title>\n\n  <ion-card-content>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h2 style="text-align: center">Establecimiento</h2>\n\n        <ion-item>\n\n          <ion-label floating>Nit</ion-label>\n\n          <ion-input [(ngModel)]="contacto" type="number" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Nombre del establecimiento</ion-label>\n\n          <ion-input [(ngModel)]="est" type="text" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Correo electronico</ion-label>\n\n          <ion-input [(ngModel)]="email" type="email" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Telefono recepción</ion-label>\n\n          <ion-input [(ngModel)]="email" type="text" required></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h2 style="text-align: center">Contacto</h2>\n\n        <ion-item>\n\n          <ion-label floating>Nombre completo</ion-label>\n\n          <ion-input [(ngModel)]="contacto" type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Telefono o celular</ion-label>\n\n            <ion-input [(ngModel)]="tel" type="number"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Correo electronico</ion-label>\n\n          <ion-input [(ngModel)]="email" type="email" required></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\configuracion\establecimiento\informacion-general\informacion-general.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InformacionGeneralComponent);
    return InformacionGeneralComponent;
}());

//# sourceMappingURL=informacion-general.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mapa_mapa__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UbicacionComponent = (function () {
    function UbicacionComponent(googleMaps) {
        this.googleMaps = googleMaps;
        console.log('Hello UbicacionComponent Component');
        this.text = 'Hello World';
        //this.getPosition();
    }
    UbicacionComponent.prototype.ngOnInit = function () {
        this.googleMaps.posicion(this.mapElement.nativeElement);
        this.googleMaps.posicionActual.subscribe(function (valor) {
            console.log("Ubicacion", valor);
        });
    };
    UbicacionComponent.prototype.getPosition = function () {
        var that = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log("posicion", pos);
                that.loadMap(pos);
            }, function () {
            });
        }
    };
    UbicacionComponent.prototype.loadMap = function (position) {
        var _this = this;
        var latitude = position.lat;
        var longitude = position.lng;
        console.log(latitude, longitude);
        //create a new map by passing HTMLElement
        var mapEle = document.getElementById('map');
        //create LatLng object
        var myLatLng = { lat: latitude, lng: longitude };
        //create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
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
        var infowindow = new google.maps.InfoWindow({
            content: "<h1>Hola!!</h1>"
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: _this.map,
                draggable: true,
                animation: google.maps.Animation.DROP,
            });
            infowindow.open(_this.map, marker);
            // marker.addListener('load', function() {
            // });
            mapEle.classList.add('show-map');
        });
    };
    UbicacionComponent.prototype.calculateAndDisplayRoute = function () {
        var that = this;
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        directionsDisplay.setMap(map);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(pos);
                that.MyLocation = new google.maps.LatLng(pos);
            }, function () {
            });
        }
        else {
            // Browser doesn't support Geolocation
        }
        var posd = {
            lat: 4.564938810824294,
            lng: -74.12605404853821
        };
        var destino = new google.maps.LatLng(posd);
        var markerArray = [];
        directionsService.route({
            origin: new google.maps.LatLng(4.564938810824294, -74.10605404853821),
            destination: new google.maps.LatLng(4.564938810824294, -74.12605404853821),
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                var marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: { lat: 4.564938810824294, lng: -74.10605404853821 }
                });
                marker.setMap(null);
                console.log('objeto', response);
                var myRoute = response.routes[0].legs[0];
                for (var i = 0; i < myRoute.steps.length; i++) {
                    var marker = new google.maps.Marker({
                        position: myRoute.steps[i].start_point,
                        map: map
                    });
                }
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], UbicacionComponent.prototype, "mapElement", void 0);
    UbicacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ubicacion',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\configuracion\establecimiento\ubicacion\ubicacion.html"*/'<!-- Generated template for the UbicacionComponent component -->\n\n\n\n<ion-row>\n\n  <ion-col style="max-width: 500px">\n\n    <ion-card >\n\n      <ion-card-header style="text-align: center">\n\n        Ubicacion\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label floating>Ciudad</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating> Localidad</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Direccion</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-col>\n\n  <ion-col style="height: 350px">\n\n    <div #map id="map"></div>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\configuracion\establecimiento\ubicacion\ubicacion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mapa_mapa__["a" /* MapaProvider */]])
    ], UbicacionComponent);
    return UbicacionComponent;
}());

//# sourceMappingURL=ubicacion.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelos_DTOposicion__ = __webpack_require__(342);
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
var MapaProvider = (function () {
    function MapaProvider() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.posicionActual = this.subject.asObservable();
        this.geoUbicacion = new __WEBPACK_IMPORTED_MODULE_2__modelos_DTOposicion__["a" /* DTOposicion */];
        console.log('Hello MapaProvider Provider');
    }
    MapaProvider.prototype.posicion = function (mapElement) {
        this.mapElement = mapElement;
        var that = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var cordenadas = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                that.crearMapa(cordenadas);
            });
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_DTOfoto__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
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
var ImagenesComponent = (function () {
    function ImagenesComponent(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.ArrayFotos = new Array();
        this.posicion = 0;
        console.log('Hello ImagenesComponent Component');
        this.text = 'Hello World';
        //this.CargarFotos();
    }
    ImagenesComponent.prototype.CargarFotos = function () {
        var Foto = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOfoto__["a" /* DTOfoto */];
        Foto.FOTprincipal = true;
        Foto.FOTurl = "https://firebasestorage.googleapis.com/v0/b/mote-e0df6.appspot.com/o/establecimientos%2FVS2R6uXf0cS16GwPwyqF%2Fsitio%2FEST_1.jpg?alt=media&token=ec85d42c-5c41-41d5-80a1-2bd7f7c876c6";
        Foto.FOTorden = 1;
        this.ArrayFotos.push(Foto);
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
        console.log('foto', event);
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            var Foto = new __WEBPACK_IMPORTED_MODULE_1__modelos_DTOfoto__["a" /* DTOfoto */];
            Foto.FOTprincipal = false;
            Foto.FOTurl = imageData;
            Foto.FOTorden = _this.ArrayFotos.length + 1;
            _this.ArrayFotos.push(Foto);
            _this.SeleccionarFoto(Foto);
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
                        _this.ArrayFotos.splice(_this.posicion, 1);
                        if (_this.posicion == 0 && _this.ArrayFotos.length == 0) {
                            _this.SeleccionarFoto(null);
                        }
                        else {
                            _this.posicion = 0;
                            _this.SeleccionarFoto(_this.ArrayFotos[_this.posicion]);
                        }
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ImagenesComponent.prototype, "fileInput", void 0);
    ImagenesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'imagenes',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\configuracion\imagenes\imagenes.html"*/'<!-- Generated template for the ImagenesComponent component -->\n\n<div>\n\n    <h1 style="text-align: center">Fotos del establecimiento</h1>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-card padding>\n\n        <div style="height: 500px" *ngIf="FotoSeleccionada">\n\n            <button ion-fab mini title="Eliminar foto" style="right: 30px; font-size: 50px; position: absolute" (click)="EliminarFoto()">\n\n                <ion-icon name="close" color="primary"></ion-icon>\n\n              </button>\n\n          <img style="max-height: 100%;  max-width: 100%" src="{{FotoSeleccionada.FOTurl}}" />\n\n        </div>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col style=" max-width: 60%">\n\n      <ion-card style="height: 100%;">\n\n        <ion-card-header>\n\n          <button ion-fab mini title="Agregar foto" style="float: right" (click)="AgregarFoto()">\n\n            <input type="file" accept="image/jpeg" #fileInput style="display:none;" class="form-control" (change)="ProcessImage($event)"\n\n            />\n\n            <ion-icon name="add" color="primary"></ion-icon>\n\n          </button>\n\n          <ion-label style="text-align: center"> {{ArrayFotos.length}} de 6</ion-label>\n\n        </ion-card-header>\n\n        <div class="general" *ngFor="let foto of ArrayFotos">\n\n          <ion-card style="height: 100%; width: 100%" padding (click)="SeleccionarFoto(foto);" [ngStyle]="{\'border\': (foto.FOTactiva) ? \'3px solid blue\' : \'\' }">\n\n              <img style="max-height: 100% ;  max-width: 100%" src="{{foto.FOTurl}}" />\n\n          </ion-card>\n\n        </div>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</div>'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\configuracion\imagenes\imagenes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ImagenesComponent);
    return ImagenesComponent;
}());

//# sourceMappingURL=imagenes.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_administracion_administracion_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_configuracionGeneral_configuracion_configuracion_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyASR-VQFfepVIDxJz_tLRzK7mrJNz_MtB0",
    authDomain: "mote-e0df6.firebaseapp.com",
    databaseURL: "https://mote-e0df6.firebaseio.com",
    projectId: "mote-e0df6",
    storageBucket: "mote-e0df6.appspot.com",
    messagingSenderId: "1075024717028"
};
var AppModule = (function () {
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/administracion/administracion.module#AdministracionPageModule', name: 'AdministracionPage', segment: 'administracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracionGeneral/configuracion/configuracion.module#ConfiguracionPageModule', name: 'ConfiguracionPage', segment: 'configuracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracionGeneral/establecimiento/establecimiento.module#EstablecimientoPageModule', name: 'EstablecimientoPage', segment: 'establecimiento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */]
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
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HabitacionesComponent; });
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
 * Generated class for the HabitacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HabitacionesComponent = (function () {
    function HabitacionesComponent() {
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'superman', 'spiderman', 'ironman'];
        console.log('Hello HabitacionesComponent Component');
        this.text = 'Hello World';
    }
    HabitacionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'habitaciones',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\habitaciones\habitaciones.html"*/'<!-- Generated template for the HabitacionesComponent component -->\n\n<div class="general" *ngFor="let hero of heroes">\n\n      <!-- <div class="habitacion">\n\n          {{hero}}\n\n      </div> -->\n\n      <ion-card>\n\n            <ion-card-header>\n\n                  {{hero}}\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                  <ion-item style="text-align: center; background-color: #d0cccc; border-radius: 25px">\n\n                        Ocupado\n\n                        <ion-icon name="radio-button-on" color="danger"></ion-icon>\n\n                  </ion-item>\n\n                  <ion-label>Tiempo</ion-label>\n\n            </ion-card-content>\n\n      </ion-card>\n\n</div>'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\habitaciones\habitaciones.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HabitacionesComponent);
    return HabitacionesComponent;
}());

//# sourceMappingURL=habitaciones.js.map

/***/ }),

/***/ 339:
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
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        console.log('Hello ProgressBarComponent Component');
        this.text = 'Hello World';
    }
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\configuracion\progress-bar\progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n\n<div>\n\n  <ion-item></ion-item>\n\n</div>\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\configuracion\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wizard_directive__ = __webpack_require__(190);
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
var WizardComponent = (function () {
    function WizardComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        console.log('Hello WizardComponent Component');
    }
    WizardComponent.prototype.ngOnInit = function () {
        this.ComponenteInicial();
        //this.loadComponent();
        //this.getAds();
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
    };
    WizardComponent.prototype.Regresar = function () {
        this.paginas[this.posicion].activo = false;
        this.posicion = (this.posicion - 1) % this.paginas.length;
        this.paginas[this.posicion].activo = true;
        this.cargarComponente(this.paginas[this.posicion]);
    };
    WizardComponent.prototype.cargarComponente = function (ComponenteActual) {
        // this.currentAdIndex = (this.currentAdIndex + 1) % this.paginas.length;
        // let adItem = this.paginas[this.currentAdIndex];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponenteActual.component);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = ComponenteActual.data;
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
            selector: 'wizard',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\wizard\wizard.html"*/'<!-- Generated template for the WizardComponent component -->\n\n<div>\n\n  <ion-list padding>\n\n    <ion-item>\n\n      <ion-row style="margin: auto; ">\n\n        <ion-col *ngFor="let pagina of paginas" style="margin: auto; max-width: 80px;">\n\n          <label ion-fab [ngStyle]="{\'border\': (pagina.activo) ? \'3px solid blue\' : \'\' }" title="{{pagina.titulo}}" id="btnInfGeneral" >\n\n            <ion-icon name="{{pagina.iconName}}" color="primary" style="font-size: 40px;"></ion-icon>\n\n          </label>\n\n          <label style=" border: 10px solid transparent; border-bottom-color: #5bc0de;"></label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button (click)="Regresar()" *ngIf="posicion > 0">\n\n        Regresar\n\n      </button>\n\n    </ion-col>\n\n    <ion-col style="text-align: right">\n\n      <button ion-button (click)="Continuar()">\n\n        Continuar\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ng-template paso-paso></ng-template>\n\n</div>\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\wizard\wizard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]])
    ], WizardComponent);
    return WizardComponent;
}());

//# sourceMappingURL=wizard.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoHabitacionComponent; });
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
 * Generated class for the TipoHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TipoHabitacionComponent = (function () {
    function TipoHabitacionComponent() {
        console.log('Hello TipoHabitacionComponent Component');
        this.text = 'Hello World';
    }
    TipoHabitacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tipo-habitacion',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\components\configuracion\TiposHabitaciones\tipo-habitacion\tipo-habitacion.html"*/'<!-- Generated template for the TipoHabitacionComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\components\configuracion\TiposHabitaciones\tipo-habitacion\tipo-habitacion.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TipoHabitacionComponent);
    return TipoHabitacionComponent;
}());

//# sourceMappingURL=tipo-habitacion.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOposicion; });
var DTOposicion = (function () {
    function DTOposicion() {
    }
    return DTOposicion;
}());

//# sourceMappingURL=DTOposicion.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DTOfoto; });
var DTOfoto = (function () {
    function DTOfoto() {
    }
    return DTOfoto;
}());

//# sourceMappingURL=DTOfoto.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_administracion_administracion__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_configuracionGeneral_configuracion_configuracion__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(195);
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
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.inicializarApp();
        this.cargarMenu();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Pages</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n  \n\n    <ion-content>\n\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  \n\n  </ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map