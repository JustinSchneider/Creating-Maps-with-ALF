import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { environment } from '../../environments/environment';
import { Alf } from '../model/alf.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  tilesStreet = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
  tilesGray = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';

  alfLayer;

  colors = [
    { name: 'Black', hexValue: '#000000'},
    { name: 'Red', hexValue: '#ed2738' },
    { name: 'Orange', hexValue: '#f7913f' },
    { name: 'Yellow', hexValue: '#ffca46' },
    { name: 'Green', hexValue: '#09a64f' },
    { name: 'Blue', hexValue: '#0f66a9' },
    { name: 'Violet', hexValue: '#642a74' }
  ];

  icons = [
    {
      color: 'Black',
      icon: L.icon({
        iconUrl: '../../assets/images/icon-black.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    },
    {
      color: 'Red',
      icon: L.icon({
        iconUrl: '../../assets/images/icon-red.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    },
    {
      color: 'Orange',
      icon: L.icon({
        iconUrl: '../../assets/images/icon-orange.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    },
    {
      color: 'Yellow',
      icon: L.icon({
        iconUrl: '../../assets/images/icon-yellow.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    },
    {
      color: 'Green',
      icon: L.icon({
        iconUrl: '../../assets/images/icon-green.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    },
    {
      color: 'Blue',
      icon: L.icon({
        iconUrl: '../../assets/images/icon-blue.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    },
    {
      color: 'Violet',
      icon: L.icon({
        iconUrl: '../../assets/images/icon-violet.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    }
  ];

  constructor(
    private afs: AngularFirestore
  ) { }

  // initMap(): L.Map {
  //   const alfMap = L.map('alf-map', {
  //     center: [40.261905, -76.880033],
  //     zoom: 16,
  //     maxZoom: 16
  //   });

  //   this.addTileLayer(alfMap);

  //   return alfMap;
  // }

  // addTileLayer(alfMap: L.Map) {
  //   L.tileLayer(this.tilesGray, {
  //     attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
  //   }).addTo(alfMap);
  // }

  // initAlfLayer(alfMap: L.Map, alfs: Alf[]) {
  //   if (this.alfLayer) {
  //     alfMap.removeLayer(this.alfLayer);
  //   }
  //   this.alfLayer = L.geoJSON(undefined, {}).addTo(alfMap);

  //   alfs.forEach(alf => {
  //     const icon = this.icons.filter(i => i.color === alf.color)[0];
  //     const mapCoords = new L.LatLng(alf.position.latitude, alf.position.longitude);
  //     const popup = '<strong>Sighting by</strong>:<br>' + alf.reportedBy;
  //     L.marker(mapCoords, icon).bindPopup(popup).addTo(this.alfLayer);
  //   });
  // }
}
