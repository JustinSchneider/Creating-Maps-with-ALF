export interface IAlf {
  id: string;
  discoveredBy: string;
  color: string;
  geoJson: any;
}

export class Alf implements IAlf {
  id: string;
  discoveredBy: string;
  color: string;
  geoJson: any;

  constructor() {
    this.id = '';
    this.discoveredBy = '';
    this.color = '#fff';
    this.geoJson = {};
  }

  static fromData(data: IAlf): Alf {
    const alfInst = new Alf();
    alfInst.id = data.id;
    alfInst.discoveredBy = data.discoveredBy;
    alfInst.color = data.color;
    alfInst.geoJson = (typeof data.geoJson === 'string') ? JSON.parse(data.geoJson) : data.geoJson;

    return alfInst;
  }

  public toData(): IAlf {
    return <IAlf> {
      id: this.id,
      discoveredBy: this.discoveredBy,
      color: this.color,
      geoJson: JSON.stringify(this.geoJson)
    };
  }
}
