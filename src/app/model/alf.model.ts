import * as firebase from 'firebase/app';

export interface IAlf {
  id: string;
  reportedBy: string;
  color: string;
  position: any;
}

export class Alf implements IAlf {
  id: string;
  reportedBy: string;
  color: string;
  position: firebase.firestore.GeoPoint;

  constructor() {
    this.id = '';
    this.reportedBy = '';
    this.color = '#fff';
    this.position = new firebase.firestore.GeoPoint(0, 0);
  }

  static fromData(data: IAlf): Alf {
    const alfInst = new Alf();
    alfInst.id = data.id;
    alfInst.reportedBy = data.reportedBy;
    alfInst.color = data.color;
    alfInst.position = data.position;

    return alfInst;
  }

  public toData(): IAlf {
    return <IAlf> {
      id: this.id,
      reportedBy: this.reportedBy,
      color: this.color,
      position: this.position
    };
  }
}
