import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularMaterialModule } from '../../core/custom-angular-material.module';
import { HatAppDetailsPermissionsComponent } from './hat-app-details-permissions.component';
// tslint:disable-next-line:max-line-length
import { UnbundlePipe } from '../../shared/pipes/unbundle.pipe';
import { ActivatedRoute } from '@angular/router';
import { HatApplicationsService } from '../hat-applications.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { HatApplication } from '../hat-application.interface';
import { SafeHtmlPipe } from '../../shared/pipes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HmiBaasContentComponent } from '../../hmi/hmi-baas-content/hmi-baas-content.component';
import { HmiPermissionsListComponent } from '../../hmi/hmi-permissions-list/hmi-permissions-list.component';
import { HmiDataDebitComponent } from '../../hmi/hmi-shared-components/hmi-data-debit/hmi-data-debit.component';
import { HmiRatingComponent } from '../../hmi/hmi-shared-components/hmi-rating/hmi-rating.component';
import { HmiDataPlugComponent } from '../../hmi/hmi-shared-components/hmi-data-plug/hmi-data-plug.component';

const HAT_APPLICATION_MOCK: HatApplication = {
  'application': {
    'id': 'notables',
    'kind': {
      'url': 'https://itunes.apple.com/gb/app/notables/id1338778866?mt=8',
      'iosUrl': 'https://itunes.apple.com/gb/app/notables/id1338778866?mt=8',
      'kind': 'App'
    },
    'info': {
      'version': '1.0.3',
      'published': true,
      'name': 'Notables',
      'headline': 'All your words',
      'description': {
        'text': '\n Anything you write online is your data – searches, social media posts, comments and notes.\n\n',
        'markdown': '\n Anything you write online is your data – searches, social media posts, comments and notes.\n\n',
        'html': `\n <p>Anything you write online is your data – searches, social media posts, comments and notes.</p>\n\n`
      },
      'termsUrl': 'https://dataswift.io/website-terms-service',
      'supportContact': 'contact@dataswift.io',
      'rating': {
        'score': 'A',
        'points': 11
      },
      'dataUsePurpose': 'Purpose of data use...',
      'dataPreview': [],
      'graphics': {
        'banner': {
          'normal': ''
        },
        'logo': {
          'normal': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
          'notablesapp/0x0ss.png'
        },
        'screenshots': [
          {
            'normal': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
            'notablesapp/0x0ss.jpg',
            'large': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
            'notablesapp/0x0ss-5.jpg'
          },
          {
            'normal': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
            'notablesapp/0x0ss-2.jpg',
            'large': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
            'notablesapp/0x0ss-6.jpg'
          },
          {
            'normal': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
            'notablesapp/0x0ss-3.jpg',
            'large': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
            'notablesapp/0x0ss-7.jpg'
          }
        ]
      }
    },
    'permissions': {
      'rolesGranted': [
        {
          'role': 'namespacewrite',
          'detail': 'rumpel'
        },
        {
          'role': 'namespaceread',
          'detail': 'rumpel'
        },
        {
          'role': 'datadebit',
          'detail': 'app-notables'
        }
      ],
      'dataRetrieved': {
        'name': 'app-notables-v103',
        'bundle': {
          'profile': {
            'endpoints': [
              {
                'endpoint': 'rumpel/profile',
                'mapping': {
                  'name': 'personal.preferredName',
                  'nick': 'personal.nickName',
                  'photo_url': 'photo.avatar'
                },
                'filters': [
                  {
                    'field': 'shared',
                    'operator': {
                      'value': true,
                      'operator': 'contains'
                    }
                  }
                ]
              }
            ],
            'orderBy': 'dateCreated',
            'ordering': 'descending',
            'limit': 1
          },
          'notables': {
            'endpoints': [
              {
                'endpoint': 'rumpel/notablesv1',
                'mapping': {
                  'kind': 'kind',
                  'shared': 'shared',
                  'message': 'message',
                  'author': 'authorv1',
                  'location': 'locationv1',
                  'shared_on': 'shared_on',
                  'created_time': 'created_time',
                  'public_until': 'public_until',
                  'updated_time': 'updated_time'
                },
                'filters': [
                  {
                    'field': 'shared',
                    'operator': {
                      'value': true,
                      'operator': 'contains'
                    }
                  }
                ]
              }
            ],
            'orderBy': 'updated_time',
            'ordering': 'descending',
            'limit': 1
          }
        }
      },
      'dataRequired': {
        'bundle': {
          'name': 'app-notables-v103',
          'bundle': {
            'profile': {
              'endpoints': [
                {
                  'endpoint': 'rumpel/profile',
                  'mapping': {
                    'name': 'personal.preferredName',
                    'nick': 'personal.nickName',
                    'photo_url': 'photo.avatar'
                  },
                  'filters': [
                    {
                      'field': 'shared',
                      'operator': {
                        'value': true,
                        'operator': 'contains'
                      }
                    }
                  ]
                }
              ],
              'orderBy': 'dateCreated',
              'ordering': 'descending',
              'limit': 1
            },
            'notables': {
              'endpoints': [
                {
                  'endpoint': 'rumpel/notablesv1',
                  'mapping': {
                    'kind': 'kind',
                    'shared': 'shared',
                    'message': 'message',
                    'author': 'authorv1',
                    'location': 'locationv1',
                    'shared_on': 'shared_on',
                    'created_time': 'created_time',
                    'public_until': 'public_until',
                    'updated_time': 'updated_time'
                  },
                  'filters': [
                    {
                      'field': 'shared',
                      'operator': {
                        'value': true,
                        'operator': 'contains'
                      }
                    }
                  ]
                }
              ],
              'orderBy': 'updated_time',
              'ordering': 'descending',
              'limit': 1
            }
          }
        },
        'startDate': '2018-05-03T09:33:39+0000',
        'endDate': '2019-05-03T09:33:39+0000',
        'rolling': true
      }
    },
    'developer': {
      'id': 'dataswift',
      'name': 'DataSwift Ltd',
      'url': 'https://dataswift.io',
      'country': 'United Kingdom'
    },
    'setup': {
      'iosUrl': 'notables://notablesapphost',
      'onboarding': [
        {
          'title': 'All your words in one place',
          'illustration': {
            'normal': 'https://s3-eu-west-1.amazonaws.com/hubofallthings-com-dexservi-dexpublicassetsbucket-kex8hb7fsdge/' +
            'notablesapp/0x0ss.jpg'
          },
          'description': 'Save them for yourself or share them on social media - you are in control'
        }
      ],
      'kind': 'External'
    },
    'status': {
      'compatibility': '1.0.3',
      'statusUrl': 'https://notables.hubofallthings.com/api/bulletin/status',
      'expectedStatus': 200,
      'dataPreviewEndpoint': 'she/feed/notables',
      'recentDataCheckEndpoint': 'rumpel/notablesv1',
      'versionReleaseDate': '2018-07-23T12:00:00.000Z',
      'kind': 'External'
    }
  },
  'setup': true,
  'enabled': true,
  'active': false,
  'needsUpdating': true,
  'mostRecentData': '2018-01-31T20:40:21.274Z'
};

describe('HatAppDetailsPermissionsComponent', () => {
  let component: HatAppDetailsPermissionsComponent;
  let fixture: ComponentFixture<HatAppDetailsPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, NoopAnimationsModule ],
      declarations: [ HatAppDetailsPermissionsComponent,
        HmiBaasContentComponent,
        HmiPermissionsListComponent,
        HmiDataDebitComponent,
        HmiRatingComponent,
        HmiDataPlugComponent,
        UnbundlePipe,
        SafeHtmlPipe
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { appId: 'notables' } } } },
        { provide: HatApplicationsService, useValue: { getApplicationDetails: () => of(HAT_APPLICATION_MOCK) } },
        { provide: Location, useValue: { back: () => {} } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatAppDetailsPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
