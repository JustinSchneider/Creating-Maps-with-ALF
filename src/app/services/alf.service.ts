import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alf, IAlf } from '../model/alf.model';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ActionSequence } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AlfService {
  alfs: Observable<Alf[]>;

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService
  ) {
    this.alfs = this.afs.collection('alfs')
      .snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<Alf>[]) => {
          return actions.map((a: DocumentChangeAction<Alf>) => {
            return a.payload.doc.data() as Alf;
          });
        })
      );
  }

  public async addAlf(alf: Alf): Promise<string | null> {
    const newId = this.afs.createId();
    alf.id = newId;
    try {
      await this.afs.collection<IAlf>('alfs').doc<IAlf>(newId).set(alf.toData());
    } catch (error) {
      this.handleError(error);
      return null;
    }
  }

  public deleteAlf(alfId: string) {
    this.afs.collection('alfs').doc(alfId).delete().then(() => {
      this.toastr.success('A.L.F. Removed');
    });
  }

  private success(message) {
    this.toastr.success(message);
  }

  private handleError(error) {
    console.error(error);
    this.toastr.error(error);
  }
}
