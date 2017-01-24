/*
 * Copyright (C) 2016 HAT Data Exchange Ltd - All Rights Reserved
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Written by Augustinas Markevicius <augustinas.markevicius@hatdex.org> 2016
 */

import { Subject, Observable } from "rxjs";
import { HatApiService } from "./hat-api.service";
import { UiStateService } from "./ui-state.service";
import { uniqBy } from 'lodash';
import { DataTable } from "../shared/interfaces/data-table.interface";

export abstract class BaseDataService<T> {
  private _data$: Subject<Array<T>> = <Subject<Array<T>>>new Subject();
  public hat: HatApiService;
  public uiSvc: UiStateService;
  public store: {
    data: Array<T>;
    tableId: number;
    idMapping?: { [s: string]: number; };
  };

  constructor(hat: HatApiService, uiSvc: UiStateService) {
    this.hat = hat; this.uiSvc = uiSvc;
    this.store = {
      data: [],
      tableId: null
    };
  }

  get data$(): Observable<Array<T>> {
    return this._data$.asObservable();
  }

  ensureTableExists(name: string, source: string): void {
    this.uiSvc.tables$.subscribe((tables: DataTable[]) => {
      const foundTable = tables.find((table: DataTable) => table.name === name && table.source === source);
      if (foundTable) {
        this.store.tableId = foundTable.id;
      }
    });
  }

  getRecentData(failedAttempts: number = 0): void {
    if (this.store.data.length > 0) {
      this.pushToStream();
    } else if (this.store.tableId) {
      this.hat.getValuesWithLimit(this.store.tableId)
        .map((rawData: Array<any>) => {
          let typeSafeData = rawData.map(this.mapData);
          return uniqBy(typeSafeData, "id");
        })
        .subscribe((data: Array<T>) => {
          this.store.data = data;

          this.pushToStream();
        });
    } else if (failedAttempts <= 10) {
      Observable.timer(75).subscribe(() => this.getRecentData(++failedAttempts));
    }
  }

  abstract mapData(rawDataItem: any): T

  pushToStream(): void {
    return this._data$.next(this.store.data);
  }

}
