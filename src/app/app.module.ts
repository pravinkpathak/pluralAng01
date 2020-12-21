import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver

}
from './events/index'
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component'; 
import { NavbarComponent } from './nav/navbar.component' 
import { ToastrService } from './common//toastr.service'
import {appRoutes } from './routes'
import { AuthService } from './user/auth.service'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
