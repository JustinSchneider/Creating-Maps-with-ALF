import { MapService } from './../services/map.service';
import { AlfService } from './../services/alf.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as L from 'leaflet';
import 'leaflet-providers';
import { Alf } from '../model/alf.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  alfs: Alf[];

  unsubscribeAll = new Subject();
  map: L.Map;
  popup: L.Popup;
  alfLayer;

  constructor(
    public alfService: AlfService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.map = this.mapService.initMap();

    this.alfService.alfs
      .pipe(
        takeUntil(this.unsubscribeAll)
      )
      .subscribe(alfs => {
        this.alfs = alfs;
      });

    this.map.on('click', (e) => {
      this.onMapClick(e);
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onMapClick(e) {

  }

}
