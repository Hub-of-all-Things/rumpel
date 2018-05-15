import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HatApplicationsService } from '../hat-applications.service';
import { HatApplication } from '../hat-application.interface';

import { Observable } from 'rxjs/Observable';

const HEADLINE_MAP = {
  'App': 'HAT apps are integrated with your HAT data to give you great services.',
  'DataPlug': 'Add new data plugs to your account, or view data from existing plugs.'
};

@Component({
  selector: 'rum-hat-application-list',
  templateUrl: './hat-application-list.component.html',
  styleUrls: ['./hat-application-list.component.scss']
})
export class HatApplicationListComponent implements OnInit {
  public hatApp$: Observable<HatApplication[]>;
  public headerProps$: Observable<{ title: string; headline: string; icon: string; }>;

  constructor(private hatAppSvc: HatApplicationsService,
              public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.hatApp$ = this.activateRoute.params.flatMap(params => this.hatAppSvc.getApplicationList(params['appKind']));
    this.headerProps$ = this.activateRoute.params.map(params => {
      return {
        title: params['appKind'],
        headline: HEADLINE_MAP[params['appKind']],
        icon: params['appKind'] === 'DataPlug' ? 'settings_input_component' : 'touch_app'
      };
    });
  }

  statusIcon(setup: boolean, active: boolean, mostRecentData: string): string {
    if (setup && active && mostRecentData) {
      return 'check_circle';
    } else if (setup && !active && !mostRecentData) {
      return 'sync';
    } else if (setup && !active && mostRecentData) {
      return 'sync_problem';
    } else {
      return 'add_circle_outline';
    }
  }
}
