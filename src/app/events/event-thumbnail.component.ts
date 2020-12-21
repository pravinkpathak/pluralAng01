import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from "./shared/index";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event.time" >Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">Too Early</span>
        <span *ngSwitchCase="'10:00 am'">late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div>Date: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">
        online url: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    
    styles: [`
    .bold { font-weight: bold; }
    .green {color: #003300 !important }
        .thumbnail { min-height: 250px;}
        .pad-left { margin-left: 10px;}
    `]
})
export class EventThumbnailComponent{
   @Input() event: IEvent
   @Output() eventClick = new EventEmitter()

   logFoo(){
       console.log('foo');
   }

   handleClickMe(){
      // console.log("hello log1");
      this.eventClick.emit(this.event.name);
   }
   getStartTimeClass(){
      //  const isEarlyStart = this.event && this.event.time === '8:00 am'
      //  return {green: isEarlyStart, bold:isEarlyStart }
      if (this.event && this.event.time === '8:00 am')
      return 'green bold'
      else
      return '' 
   }
}