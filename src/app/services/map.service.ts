import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  tilesStreet =
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
  tilesGray =
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  constructor() {}

  initMap(): L.Map {
    const map = L.map('alf-map', {
      center: [40.261905, -76.880033],
      zoom: 16,
      maxZoom: 18
    });

    this.addTileLayer(map);

    return map;
  }

  addTileLayer(map: L.Map) {
    L.tileLayer(this.tilesGray, {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
    }).addTo(map);
  }
}
