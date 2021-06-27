import { Injectable } from '@angular/core';
import { of } from 'rxjs';

let EVENTS = [
  {
    id: 1,
    title: 'Jobs for everyone',
    city: 'Varna',
    date: '11/07/2021',
    image: 'https://image.shutterstock.com/image-photo/good-deal-closeup-two-business-600w-400222735.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  {
    id: 2,
    title: 'Accessibility is the feature',
    city: 'Sofia',
    date: '18/07/2021',
    image: 'https://image.shutterstock.com/image-photo/green-key-text-access-open-600w-1022296873.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  {
    id: 3,
    title: 'Javascript or Not',
    city: 'Sofia',
    date: '20/09/2021',
    image: 'https://image.shutterstock.com/image-photo/programming-language-javascript-inscription-on-600w-1463449130.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  {
    id: 4,
    title: 'Formula 1',
    city: 'Hungary',
    date: '18/08/2021',
    image: 'https://image.shutterstock.com/image-photo/sochi-russia-29-september-2019-600w-1529772422.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  }
];

@Injectable( {
  providedIn: 'root'
} )
export class EventsService {
  constructor() { }

  getEvents() {
    return of( EVENTS );
  }

  getEventById( id: number ) {
    return of( EVENTS.filter( event => {
      return event.id == id;
    } )[0] );
  }
}
