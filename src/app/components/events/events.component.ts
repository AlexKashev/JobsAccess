import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component( {
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
} )
export class EventsComponent implements OnInit {
  events = [];

  constructor( private eventsService: EventsService ) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe( ( result: any ) => {
      this.events = result;
      console.log( result );
    } );
  }

}
