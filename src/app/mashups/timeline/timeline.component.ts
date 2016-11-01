import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core'
import { Moment } from 'moment';

@Component({
  selector: 'rump-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnChanges {
  @Input() timeline: Array<Moment>;
  @Output() timeSelected = new EventEmitter<any>();
  private selected;
  private timelineGrouped = new Array<[string, Array<Moment>]>();

  @ViewChild('timelineScroll') private timelineScrollContainer: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.timeline.sort((day1, day2) => day1.isAfter(day2, 'day') ? -1 : 1);
    if (this.timeline && this.timeline.length > 0) {
      this.selected = this.timeline[0]
    }

    let grouped = this.timeline.reduce( function (acc, item) {
      let month = item.format("MMMM, YYYY");
      if ( month in acc ) acc[month].push(item);
      else acc[month] = new Array<Moment>(item);
      return acc;
    }, {} );

    //this.timelineGrouped = new Array<[string, Array<Moment>]>();
    for (let month in grouped) {
      this.timelineGrouped.push([month, grouped[month]])
    }
    console.log("Grouped", this.timelineGrouped);

  }

  selectTime(day: any) {
    this.selected = day;
    this.timeSelected.emit(day);
  }

  scrollUp() {
    try {
      this.timelineScrollContainer.nativeElement.scrollTop = this.timelineScrollContainer.nativeElement.scrollTop - 100;
    } catch(err) { console.error(err); }
  }

  scrollDown() {
    try {
      this.timelineScrollContainer.nativeElement.scrollTop = this.timelineScrollContainer.nativeElement.scrollTop + 100;
    } catch(err) { console.error(err); }
  }
}