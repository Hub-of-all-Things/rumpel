/*
 * Copyright (C) 2017 - 2019 DataSwift Ltd - All Rights Reserved
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Written by Augustinas Markevicius <augustinas.markevicius@dataswift.io> 1, 2017
 */

import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../shared/interfaces/index';
import { HatRecord } from '../../shared/interfaces/hat-record.interface';

@Component({
  selector: 'rum-location-tweet',
  templateUrl: './location-tweet.component.html',
  styleUrls: ['./location-tweet.component.scss']
})
export class LocationTweetComponent implements OnInit {
  @Input() tweet: HatRecord<Tweet>;

  constructor() { }

  ngOnInit() {
  }

}
