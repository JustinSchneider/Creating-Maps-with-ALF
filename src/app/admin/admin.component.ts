import { AlfService } from './../services/alf.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alf } from '../model/alf.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  alfs: Alf[];
  unsubscribeAll = new Subject();

  constructor(
    private alfService: AlfService
  ) { }

  ngOnInit() {
    this.alfService.alfs
      .pipe(
        takeUntil(this.unsubscribeAll)
      )
      .subscribe(alfs => {
        this.alfs = alfs;
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  deleteAlf(alfId: string) {
    this.alfService.deleteAlf(alfId);
  }


}
