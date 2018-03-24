import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MapaProvider } from '../../../../providers/mapa/mapa';
import { DTOEstablecimiento } from '../../../../modelos/DTOestablecimiento';
import { EstablecimientoProvider } from '../../../../providers/general/Establecimiento';
import { DTOposicion } from '../../../../modelos/DTOposicion';
/**
 * Generated class for the UbicacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var google;


@Component({
  selector: 'ubicacion',
  templateUrl: 'ubicacion.html'
})
export class UbicacionComponent implements OnInit {

  text: string;
  map: any;
  MyLocation: any;
  establecimiento = new DTOEstablecimiento;

  @ViewChild('map') mapElement: ElementRef;

  constructor(public googleMaps: MapaProvider
    , private ESTservice: EstablecimientoProvider
  ) {
    console.log('Hello UbicacionComponent Component');
    this.text = 'Hello World';
    //this.getPosition();
  }

  ngOnInit(): void {
    this.obtenerEST();
  }

  obtenerEST() {
    this.establecimiento = this.ESTservice.establecimiento;

    this.googleMaps.posicion(this.mapElement.nativeElement, this.establecimiento.ESTgeolocalizacion);
    this.googleMaps.posicionActual.subscribe(valor => {
      this.establecimiento.ESTgeolocalizacion = new DTOposicion;
      this.establecimiento.ESTgeolocalizacion.latitude = valor.latitude;
      this.establecimiento.ESTgeolocalizacion.longitude = valor.longitude;
      this.GuardarEST();
    });

  }

  GuardarEST() {
    this.ESTservice.guardarBd();
  }

  //   getPosition():any{
  //     let that = this;
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(function(position) {
  //         var pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         }; 
  //         console.log("posicion", pos);
  //         that.loadMap(pos);
  //       }, function() {

  //       });
  //     }
  //   }

  //   loadMap(position){
  //     let latitude = position.lat;
  //     let longitude = position.lng;
  //     console.log(latitude, longitude);

  //     //create a new map by passing HTMLElement
  //     let mapEle: HTMLElement = document.getElementById('map');

  //     //create LatLng object
  //     let myLatLng = {lat: latitude, lng: longitude};

  //     //create map
  //     this.map = new google.maps.Map(mapEle, {
  //       center: myLatLng,
  //       zoom: 16,
  //       styles: [
  //         {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  //         {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  //         {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  //         {
  //           featureType: 'administrative.locality',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#d59563'}]
  //         },
  //         {
  //           featureType: 'poi',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#d59563'}]
  //         },
  //         {
  //           featureType: 'poi.park',
  //           elementType: 'geometry',
  //           stylers: [{color: '#263c3f'}]
  //         },
  //         {
  //           featureType: 'poi.park',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#6b9a76'}]
  //         },
  //         {
  //           featureType: 'road',
  //           elementType: 'geometry',
  //           stylers: [{color: '#38414e'}]
  //         },
  //         {
  //           featureType: 'road',
  //           elementType: 'geometry.stroke',
  //           stylers: [{color: '#212a37'}]
  //         },
  //         {
  //           featureType: 'road',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#9ca5b3'}]
  //         },
  //         {
  //           featureType: 'road.highway',
  //           elementType: 'geometry',
  //           stylers: [{color: '#746855'}]
  //         },
  //         {
  //           featureType: 'road.highway',
  //           elementType: 'geometry.stroke',
  //           stylers: [{color: '#1f2835'}]
  //         },
  //         {
  //           featureType: 'road.highway',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#f3d19c'}]
  //         },
  //         {
  //           featureType: 'transit',
  //           elementType: 'geometry',
  //           stylers: [{color: '#2f3948'}]
  //         },
  //         {
  //           featureType: 'transit.station',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#d59563'}]
  //         },
  //         {
  //           featureType: 'water',
  //           elementType: 'geometry',
  //           stylers: [{color: '#17263c'}]
  //         },
  //         {
  //           featureType: 'water',
  //           elementType: 'labels.text.fill',
  //           stylers: [{color: '#515c6d'}]
  //         },
  //         {
  //           featureType: 'water',
  //           elementType: 'labels.text.stroke',
  //           stylers: [{color: '#17263c'}]
  //         }
  //       ]
  //     });

  //     var infowindow = new google.maps.InfoWindow({
  //       content: "<h1>Hola!!</h1>"
  //     });

  //     google.maps.event.addListenerOnce(this.map, 'idle', () => {


  //       let marker = new google.maps.Marker({
  //         position: myLatLng,
  //         map: this.map,
  //         draggable: true,
  //         animation: google.maps.Animation.DROP,
  //       });

  //       infowindow.open(this.map, marker);
  //       // marker.addListener('load', function() {

  //       // });
  //       mapEle.classList.add('show-map');
  //     });
  //   }

  //   calculateAndDisplayRoute() {
  //     let that = this;
  //     let directionsService = new google.maps.DirectionsService;
  //     let directionsDisplay = new google.maps.DirectionsRenderer;
  //     const map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 7,
  //       center: {lat: 41.85, lng: -87.65}
  //     });
  //     directionsDisplay.setMap(map);

  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(function(position) {
  //         var pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         };
  //         map.setCenter(pos);
  //         that.MyLocation = new google.maps.LatLng(pos);

  //       }, function() {

  //       });
  //     } else {
  //       // Browser doesn't support Geolocation
  //     }

  //     var posd = {
  //       lat: 4.564938810824294,
  //       lng: -74.12605404853821
  //     }

  //     var destino = new google.maps.LatLng(posd);
  //     var markerArray = [];


  //     directionsService.route({
  //     origin: new google.maps.LatLng(4.564938810824294, -74.10605404853821),
  //     destination: new google.maps.LatLng(4.564938810824294, -74.12605404853821),
  //     travelMode: 'DRIVING',
  //     unitSystem: google.maps.UnitSystem.IMPERIAL
  //   }, function(response, status) {
  //     if (status === 'OK') {  

  //       directionsDisplay.setDirections(response);
  //       var marker = new google.maps.Marker({
  //         map: map,
  //         draggable: true,
  //         animation: google.maps.Animation.DROP,
  //         position: {lat: 4.564938810824294, lng: -74.10605404853821}
  //       });
  //       marker.setMap(null);
  //       console.log('objeto',response)

  //       var myRoute = response.routes[0].legs[0];

  //         for (var i = 0; i < myRoute.steps.length; i++) {
  //             var marker = new google.maps.Marker({
  //               position: myRoute.steps[i].start_point,
  //               map: map
  //             });

  //         }

  //     } else {
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   });
  // }

}
