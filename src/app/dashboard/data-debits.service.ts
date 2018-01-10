/*
 * Copyright (C) 2016 HAT Data Exchange Ltd - All Rights Reserved
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Written by Augustinas Markevicius <augustinas.markevicius@hatdex.org>
 */

import { Injectable } from '@angular/core';
import { HatApiV2Service } from '../services/hat-api-v2.service';
import { Observable } from 'rxjs/Observable';
import { DataDebit } from '../shared/interfaces/data-debit.interface';

@Injectable()
export class DataDebitService {

  constructor(private hat: HatApiV2Service) {}

  loadAllDataDebits(): Observable<DataDebit[]> {
    return this.hat.getAllDataDebits();
  }

}