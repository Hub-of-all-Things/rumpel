/*
 * Copyright (C) 2016 - 2019 DataSwift Ltd - All Rights Reserved
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Written by Augustinas Markevicius <augustinas.markevicius@dataswift.io> 2016
 */

import * as moment from 'moment';
import { Moment } from 'moment';

export class ExpandedTime {
  public timestamp: Moment;
  public unixDayStart: number;

  constructor(time: Moment) {
    this.timestamp = time;
    this.unixDayStart = moment(time).startOf('day').unix();
  }
}
