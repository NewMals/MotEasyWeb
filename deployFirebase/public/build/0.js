webpackJsonp([0],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablecimientoPageModule", function() { return EstablecimientoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__establecimiento__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EstablecimientoPageModule = (function () {
    function EstablecimientoPageModule() {
    }
    EstablecimientoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__establecimiento__["a" /* EstablecimientoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__establecimiento__["a" /* EstablecimientoPage */]),
            ],
        })
    ], EstablecimientoPageModule);
    return EstablecimientoPageModule;
}());

//# sourceMappingURL=establecimiento.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstablecimientoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_configuracion_establecimiento_informacion_general_informacion_general__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_configuracion_establecimiento_ubicacion_ubicacion__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_configuracion_imagenes_imagenes__ = __webpack_require__(203);
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
 * Generated class for the EstablecimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstablecimientoPage = (function () {
    function EstablecimientoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.text = "valor";
        this.ArrayConfiguracionEST = [
            { id: 1, titulo: "Informacion General", iconName: "folder-open", activo: false, component: __WEBPACK_IMPORTED_MODULE_2__components_configuracion_establecimiento_informacion_general_informacion_general__["a" /* InformacionGeneralComponent */] },
            { id: 2, titulo: "Ubicacion", iconName: "pin", activo: false, component: __WEBPACK_IMPORTED_MODULE_3__components_configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */] },
            { id: 3, titulo: "Imagenes", iconName: "images", activo: true, component: __WEBPACK_IMPORTED_MODULE_4__components_configuracion_imagenes_imagenes__["a" /* ImagenesComponent */] },
            { id: 4, titulo: "Guardar", iconName: "archive", activo: false, component: __WEBPACK_IMPORTED_MODULE_3__components_configuracion_establecimiento_ubicacion_ubicacion__["a" /* UbicacionComponent */] }
        ];
    }
    EstablecimientoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstablecimientoPage');
    };
    EstablecimientoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-establecimiento',template:/*ion-inline-start:"D:\MotEasy\MotEasyWeb\src\pages\configuracionGeneral\establecimiento\establecimiento.html"*/'<!--\n\n  Generated template for the EstablecimientoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Establecimiento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <wizard [paginas]="ArrayConfiguracionEST"></wizard>\n\n    <!-- <informacion-general></informacion-general> -->\n\n    \n\n  <!-- <ion-card style="width: 500px; float:left">\n\n      <ion-card-header>\n\n            Ubicacion\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <ion-item>\n\n            <ion-label>Ciudad</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label>Localidad</ion-label>\n\n              <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Direccion</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n          </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  <ion-card style="width: 500px; float:left">\n\n      <ion-card-header>\n\n\n\n            Informacion visualizada por los usuarios\n\n\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <ion-item>\n\n            <ion-label>Nombre para salir en la app</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Telefono de recepcion</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n          </ion-item>\n\n      </ion-card-content>\n\n    </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\MotEasy\MotEasyWeb\src\pages\configuracionGeneral\establecimiento\establecimiento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EstablecimientoPage);
    return EstablecimientoPage;
}());

//# sourceMappingURL=establecimiento.js.map

/***/ })

});
//# sourceMappingURL=0.js.map