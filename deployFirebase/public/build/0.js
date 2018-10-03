webpackJsonp([0],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposHabitacionesPageModule", function() { return TiposHabitacionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipos_habitaciones__ = __webpack_require__(617);
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

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiposHabitacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_configuracion_TiposHabitaciones_registrar_registrar_tip_hab__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_configuracion_tarifas_tarifas__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_general_habitacion_tipo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_general_Establecimiento__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modelos_DTOhabitacion__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_configuracion_imagenes_imagenes__ = __webpack_require__(349);
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
    function TiposHabitacionesPage(navCtrl, navParams, TIHservice, ESTservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TIHservice = TIHservice;
        this.ESTservice = ESTservice;
        this.ArrayConfiguracionHAB = [
            { id: 1, titulo: "Registrar tipo de habitación", iconName: "folder-open", activo: true, component: __WEBPACK_IMPORTED_MODULE_2__components_configuracion_TiposHabitaciones_registrar_registrar_tip_hab__["a" /* RegistrarTipHabComponent */] },
            { id: 2, titulo: "Tarifas", iconName: "logo-usd", activo: false, component: __WEBPACK_IMPORTED_MODULE_3__components_configuracion_tarifas_tarifas__["a" /* TarifasComponent */] },
            { id: 3, titulo: "Imagenes", iconName: "images", activo: false, component: __WEBPACK_IMPORTED_MODULE_7__components_configuracion_imagenes_imagenes__["a" /* ImagenesComponent */] }
        ];
    }
    TiposHabitacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TiposHabitacionesPage');
    };
    TiposHabitacionesPage.prototype.ionViewWillLeave = function () {
        this.objetoTipoHabitacion();
        this.TIHservice.guardarBd();
        this.TIHservice.guardarFb();
        this.ESTservice.guardarBd();
        this.ESTservice.guardarFb();
    };
    TiposHabitacionesPage.prototype.objetoTipoHabitacion = function () {
        var objEstablecimiento = this.ESTservice.establecimiento;
        var objTipoHabitacion = this.TIHservice.habitacionTipo;
        var VistaHabitacion = new __WEBPACK_IMPORTED_MODULE_6__modelos_DTOhabitacion__["c" /* DTOHabitacionView */];
        this.crearVistaHabitacion(VistaHabitacion, objTipoHabitacion);
        objTipoHabitacion.HTIhabitaciones = this.crearHabitaciones(objTipoHabitacion.HTIcantidad);
        objEstablecimiento.ESThabitacionesTipos = (objEstablecimiento.ESThabitacionesTipos && objEstablecimiento.ESThabitacionesTipos.length > 0) ? objEstablecimiento.ESThabitacionesTipos : new Array();
        var idTipoHab = objEstablecimiento.ESThabitacionesTipos.findIndex(function (index) { return index.HVIid === objTipoHabitacion.HTIid; });
        if (idTipoHab >= 0) {
            objEstablecimiento.ESThabitacionesTipos[idTipoHab] = VistaHabitacion;
        }
        else {
            objEstablecimiento.ESThabitacionesTipos.push(VistaHabitacion);
        }
    };
    TiposHabitacionesPage.prototype.crearVistaHabitacion = function (VistaHabitacion, objTipoHabitacion) {
        VistaHabitacion.HVIid = objTipoHabitacion.HTIid;
        VistaHabitacion.HVInombre = objTipoHabitacion.HTInombre;
        VistaHabitacion.HVIdescripcion = objTipoHabitacion.HTIdescripcion;
        VistaHabitacion.HVIfoto = (objTipoHabitacion.HTIfotos && objTipoHabitacion.HTIfotos.length > 0) ? objTipoHabitacion.HTIfotos.find(function (foto) { return foto.FOTactiva === true; }).FOTurl : "";
        VistaHabitacion.HVItarifaMin = 0;
        objTipoHabitacion.HTItarifas.forEach(function (tar) {
            var valor = tar.TARvalor;
            VistaHabitacion.HVItarifaMin = (valor <= VistaHabitacion.HVItarifaMin || VistaHabitacion.HVItarifaMin == 0) ? valor : VistaHabitacion.HVItarifaMin;
        });
    };
    TiposHabitacionesPage.prototype.crearHabitaciones = function (cantidadHab) {
        var ArrayHabitaciones = new Array();
        for (var i = 1; i <= cantidadHab; i++) {
            var itemHabitacion = new __WEBPACK_IMPORTED_MODULE_6__modelos_DTOhabitacion__["a" /* DTOHabitacionItem */];
            itemHabitacion.HITid = Math.random().toString(36).substring(2);
            itemHabitacion.HITestado = "Disponible";
            itemHabitacion.HITidentidad = i.toString();
            ArrayHabitaciones.push(itemHabitacion);
        }
        return ArrayHabitaciones;
    };
    TiposHabitacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tipos-habitaciones',template:/*ion-inline-start:"D:\Proyecto\MotEasyWeb\src\pages\configuracionGeneral\tipos-habitaciones\tipos-habitaciones.html"*/'<!--\n\n  Generated template for the TiposHabitacionesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>TiposHabitaciones</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <wizard [paginas]="ArrayConfiguracionHAB"></wizard>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Proyecto\MotEasyWeb\src\pages\configuracionGeneral\tipos-habitaciones\tipos-habitaciones.html"*/,
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