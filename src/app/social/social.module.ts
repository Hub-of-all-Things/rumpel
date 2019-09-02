/*
 * Copyright (C) 2017 - 2019 DataSwift Ltd - All Rights Reserved
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Written by Augustinas Markevicius <augustinas.markevicius@dataswift.io> 1, 2017
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TileSocialComponent } from './tile-social/tile-social.component';
import { FbPostComponent } from './fb-post/fb-post.component';
import { LocationFbPostComponent } from './location-fb-post/location-fb-post.component';
import { TweetComponent } from './tweet/tweet.component';
import { LocationTweetComponent } from './location-tweet/location-tweet.component';

import { SocialService } from './social.service';
import { TwitterService } from './twitter.service';
import { MediaService } from './media.service';

@NgModule({
    imports: [ SharedModule ],
    declarations: [ TileSocialComponent, FbPostComponent,
                    LocationFbPostComponent, TweetComponent, LocationTweetComponent ],
    providers: [ SocialService, TwitterService, MediaService ],
    exports: [ TileSocialComponent, FbPostComponent, LocationFbPostComponent, TweetComponent, LocationTweetComponent ]
})
export class SocialModule {}
