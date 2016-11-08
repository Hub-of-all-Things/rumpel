import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] }
      ])
    ],
    exports: [
      RouterModule
    ]
})
export class DimensionsRoutingModule {}
