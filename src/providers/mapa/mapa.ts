import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DTOposicion } from '../../modelos/DTOposicion';
import { Observable } from 'rxjs/Observable';

declare var google;
/*
  Generated class for the MapaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapaProvider {

  mapElement: any;
  map: any;
  subject: Subject<DTOposicion> = new Subject<DTOposicion>();
  posicionActual: Observable<DTOposicion> = this.subject.asObservable();
  geoUbicacion = new DTOposicion;

  constructor() {
    console.log('Hello MapaProvider Provider');
  }

  posicion(mapElement: any){
    this.mapElement = mapElement;

    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let cordenadas = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }; 
        that.crearMapa(cordenadas);
      });
    }
  }
  
  crearMapa(posicion){
    this.map = new google.maps.Map(this.mapElement, {
      center: posicion,
      zoom: 16,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });

    this.Marca(posicion);
  }

  Marca(posicion){
    let that = this;

    let marker = new google.maps.Marker({
      position: posicion,
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
    });

    let infowindow = new google.maps.InfoWindow({
      content: "<strong>Arrastrame para conocer mejor la ubicación del establecimiento</strong>"
    });

    infowindow.open(this.map, marker); 

    google.maps.event.addListener(marker,'dragend',function(event) {
      that.geoUbicacion.latitude = this.position.lat();
      that.geoUbicacion.longitude = this.position.lng();
      that.subject.next(that.geoUbicacion);
    });
  }
}
