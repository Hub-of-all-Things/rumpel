/*
 * Copyright (C) 2019 HAT Data Exchange Ltd - All Rights Reserved
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Written by Eleftherios Myteletsis <eleftherios.myteletsis@gmail.com> 3, 2019
 */

export interface SystemStatusInterface {
  title: string;
  kind: { metric: string;
    kind: string;
    units?: string;
  };
}

interface SystemStatusKindInterface {
  metric: string;
  kind: string;
  units?: string;
}
