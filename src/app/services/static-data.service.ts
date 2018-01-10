import { Injectable } from '@angular/core';
import {HatApiV2Service} from './hat-api-v2.service';
import {UserService} from '../user/user.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {HatRecord} from '../shared/interfaces/hat-record.interface';
import {Observable} from 'rxjs/Observable';
import { toPairs } from 'lodash';

const ENDPOINT_MAP = {
  facebook: 'profile',
  twitter: 'tweets',
  fitbit: 'profile'
};

const ORDER_BY_MAP = {
  facebook: 'dateCreated',
  twitter: 'id',
  fitbit: 'dateCreated'
};

@Injectable()
export class StaticDataService {
  private _data$: ReplaySubject<Array<Array<any>>> = <ReplaySubject<Array<Array<any>>>>new ReplaySubject(1);
  private store: { [source: string]: Array<Array<any>> } = {
    facebook: [],
    twitter: [],
    fitbit: []
  };

  constructor(private hat: HatApiV2Service, userSvc: UserService) { }

  get data$(): Observable<Array<Array<any>>> {
    return this._data$.asObservable();
  }

  fetchData(source: string): void {
    if (this.store[source].length > 0) {
      this.pushToStream(source);
    } else {
      this.hat.getDataRecords(source, ENDPOINT_MAP[source], 1, ORDER_BY_MAP[source])
        .map((rawData: HatRecord<any>[]) => rawData.map(record => toPairs(record.data)))
        .subscribe(data => {
          if (data.length > 0) {
            this.store[source] = data[0];
            this.pushToStream(source);
          }
        });
    }
  }

  private pushToStream(source: string): void {
    this._data$.next(this.store[source]);
  }

}