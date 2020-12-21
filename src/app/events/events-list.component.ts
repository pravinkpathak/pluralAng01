import { toBase64String } from '@angular/compiler/src/output/source_map'
import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { IEvent } from "./shared/index";
  
@Component({
    template: `
    <div class="container">
        <h1>Upcomong Event</h1>
        <hr>
        <div class='row'><div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)"  [event]="event" ></event-thumbnail> 
    </div></div></div>
`, 
}) //(eventClick)="handleEventClicked($event)"
export class EventsListComponent implements OnInit{
    events:IEvent 
    constructor( private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){
        

    }
    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
    }
    ngOnInit(){
        this.events = this.route.snapshot.data['events']
        //this.eventService.getEvents().subscribe( events => { this.events=events })
    }
     
}