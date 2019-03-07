import { Injectable } from '@angular/core';
import { HatApiService } from '../core/services/hat-api.service';
import { ReplaySubject ,  Observable } from 'rxjs';
import { HatRecord } from '../shared/interfaces/hat-record.interface';
import { toPairs } from 'lodash';
import { map } from 'rxjs/operators';
import {SheStaticProfile} from '../shared/interfaces/she-static-profile.interface';

const ENDPOINT_MAP = {
  facebook: 'profile',
  twitter: 'tweets',
  fitbit: 'profile',
  spotify: 'profile'
};

const ORDER_BY_MAP = {
  facebook: 'dateCreated',
  twitter: 'id',
  fitbit: 'dateCreated',
  spotify: 'dateCreated'
};

@Injectable()
export class StaticDataService {
  private _data$: ReplaySubject<Array<Array<any>>> = <ReplaySubject<Array<Array<any>>>>new ReplaySubject(1);
  private store: { [source: string]: Array<Array<any>> } = {
    facebook: [],
    twitter: [],
    fitbit: [],
    spotify: []
  };

  constructor(private hat: HatApiService) { }

  get data$(): Observable<Array<Array<any>>> {
    return this._data$.asObservable();
  }

  fetchData(source: string): Observable<Array<Array<any>>> {
    return this.hat.getDataRecords(source, ENDPOINT_MAP[source], 1, ORDER_BY_MAP[source])
      .pipe(map((rawData: HatRecord<any>[]) => rawData.map(record => {
        if (source === 'twitter') {
          return toPairs(record.data.user);
        } else {
          return toPairs(record.data);
        }
      })));
  }

  fetchSheStaticInfo(source: string): Observable<Array<Array<any>>> {
    return this.hat.getSheStaticProfileRecords(source)
      .pipe(map((rawData: SheStaticProfile<any>[]) => rawData.map(record => {
        return toPairs(record.values);
      })));
  }

  private pushToStream(source: string): void {
    this._data$.next(this.store[source]);
  }

}
