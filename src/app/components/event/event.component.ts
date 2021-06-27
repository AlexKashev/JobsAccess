import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component( {
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
} )
export class EventComponent implements OnInit {
  eventId: number;
  event: any;

  constructor( private route: ActivatedRoute, private eventsService: EventsService ) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];

    this.eventsService.getEventById( this.eventId ).subscribe( result => {
      this.event = result;
    } );
  }

}
