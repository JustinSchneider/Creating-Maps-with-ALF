import { UserService } from './../services/user.service';
import { MapService } from './../services/map.service';
import { AlfService } from './../services/alf.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as L from 'leaflet';
import { Alf } from '../model/alf.model';
import * as firebase from 'firebase/app';

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

  colors;
  selectedColorIndex = 0;
  characters: string[];
  selectedCharacter = 'Willie';
  reportActive = false;

  constructor(
    private userService: UserService,
    public alfService: AlfService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.characters = this.userService.characters;
    this.colors = this.mapService.colors;

    // this.map = this.mapService.initMap();

    // this.alfService.alfs
    //   .pipe(takeUntil(this.unsubscribeAll))
    //   .subscribe(alfs => {
    //     this.alfs = alfs;
    //     this.mapService.initAlfLayer(this.map, alfs);
    //   });

    // this.map.on('click', e => {
    //   this.onMapClick(e);
    // });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onMapClick(e) {
    if (this.reportActive) {
      // const alf = new Alf();
      // alf.reportedBy = this.selectedCharacter;
      // alf.color = this.colors[this.selectedColorIndex].name;
      // alf.position = new firebase.firestore.GeoPoint(e.latlng.lat, e.latlng.lng);

      // this.alfService.addAlf(alf).then(() => {
      //   this.reportActive = false;
      // });
    }
  }

}
