/*
 * Copyright (C) 2016 - 2019 DataSwift Ltd - All Rights Reserved
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Written by Augustinas Markevicius <augustinas.markevicius@dataswift.io> 2016
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCamelCase'
})
export class ReplaceCamelCasePipe implements PipeTransform {

  transform(str: string, args?: any): string {

    return str.replace
    ( /(^[a-z]+)|[0-9]+|[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z]|[0-9])/g
      , function(match, first) {
        if (first) {
          match = match[0].toUpperCase() + match.substr(1);
        }

        return match + ' ';
      }
    )
  }

}
