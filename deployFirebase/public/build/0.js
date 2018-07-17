webpackJsonp([0],{

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposHabitacionesPageModule", function() { return TiposHabitacionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipos_habitaciones__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TiposHabitacionesPageModule = /** @class */ (function () {
    function TiposHabitacionesPageModule() {
    }
    TiposHabitacionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tipos_habitaciones__["a" /* TiposHabitacionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tipos_habitaciones__["a" /* TiposHabitacionesPage */]),
            ],
        })
    ], TiposHabitacionesPageModule);
    return TiposHabitacionesPageModule;
}());

//# sourceMappingURL=tipos-habitaciones.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiposHabitacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_configuracion_TiposHabitaciones_registrar_registrar_tip_hab__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_configuracion_tarifas_tarifas__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_general_habitacion_tipo__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modelos_DTOhabitacion__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_configuracion_establecimiento_imagenes_imagenes__ = __webpack_require__(349);
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
 * Generated class for the TiposHabitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TiposHabitacionesPage = /** @class */ (function () {
    function TiposHabitacionesPage(navCtrl, navParams, HABservice, ESTservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HABservice = HABservice;
        this.ESTservice = ESTservice;
        this.ArrayConfiguracionHAB = [
            { id: 1, titulo: "Registrar tipo de habitación", iconName: "folder-open", activo: true, component: __WEBPACK_IMPORTED_MODULE_2__components_configuracion_TiposHabitaciones_registrar_registrar_tip_hab__["a" /* RegistrarTipHabComponent */] },
            { id: 2, titulo: "Tarifas", iconName: "logo-usd", activo: false, component: __WEBPACK_IMPORTED_MODULE_3__components_configuracion_tarifas_tarifas__["a" /* TarifasComponent */] },
            { id: 3, titulo: "Imagenes", iconName: "images", activo: false, component: __WEBPACK_IMPORTED_MODULE_7__components_configuracion_establecimiento_imagenes_imagenes__["a" /* ImagenesComponent */] }
        ];
    }
    TiposHabitacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TiposHabitacionesPage');
    };
    TiposHabitacionesPage.prototype.ionViewDidLeave = function () {
        var est = this.ESTservice.establecimiento;
        var tipoHab = this.HABservice.habitacionTipo;
        var hab = new __WEBPACK_IMPORTED_MODULE_6__modelos_DTOhabitacion__["b" /* DTOhabitaciones */];
        hab.HTIdescripcion = tipoHab.HTInombre;
        hab.HTIfoto = (tipoHab.HTIfotos) ? tipoHab.HTIfotos.find(function (foto) { return foto.FOTprincipal === true; }).FOTurl : "";
        hab.HTItarifaMin = 0;
        tipoHab.HTItarifas.forEach(function (tar) {
            var valor = tar.TARvalor;
            hab.HTItarifaMin = (valor <= hab.HTItarifaMin || hab.HTItarifaMin == 0) ? valor : hab.HTItarifaMin;
        });
        if (tipoHab.HTIid >= 0) {
            var valor = est.ESThabitacionesTipos.findIndex(function (index) { return index.HTIid === tipoHab.HTIid; });
            hab.HTIid = tipoHab.HTIid;
            est.ESThabitacionesTipos[valor] = hab;
        }
        else {
            est.ESThabitacionesTipos = est.ESThabitacionesTipos ? est.ESThabitacionesTipos : new Array();
            hab.HTIid = est.ESThabitacionesTipos ? est.ESThabitacionesTipos.length : 0;
            this.HABservice.habitacionTipo.HTIid = hab.HTIid;
            est.ESThabitacionesTipos.push(hab);
        }
        this.HABservice.guardarBd();
        this.HABservice.guardarFb();
        this.ESTservice.guardarBd();
        this.ESTservice.guardarFb();
    };
    TiposHabitacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tipos-habitaciones',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\pages\configuracionGeneral\tipos-habitaciones\tipos-habitaciones.html"*/'<!--\n  Generated template for the TiposHabitacionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TiposHabitaciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <wizard [paginas]="ArrayConfiguracionHAB"></wizard>\n</ion-content>\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\pages\configuracionGeneral\tipos-habitaciones\tipos-habitaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_general_habitacion_tipo__["a" /* HabitacionTipoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_general_Establecimiento__["a" /* EstablecimientoProvider */]])
    ], TiposHabitacionesPage);
    return TiposHabitacionesPage;
}());

//# sourceMappingURL=tipos-habitaciones.js.map

/***/ })

});
//# sourceMappingURL=0.js.map