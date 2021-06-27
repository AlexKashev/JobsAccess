import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class JobsService {
  currentFilter = new BehaviorSubject( '' );
  focusSearchForm = new Subject();
  allJobs: any;

  constructor( private http: HttpClient ) { }

  getJobs() {
    if ( this.allJobs ) {
      return of( this.allJobs );
    }

    return this.http.get<any>( '/assets/data/jobs.json' ).pipe( tap( jobs => {
      this.allJobs = jobs;
    } ) );
  }

  getJobById( id: number ) {
    return of( this.allJobs.filter( job => {
      return job.id == id;
    } )[0] );
  }

  getFilteredJobs( filters: any ) {
    if ( !filters ) {
      return this.getJobs();
    }
    else {
      filters.all = filters.all.toLocaleLowerCase();
      filters.city = filters.city.toLocaleLowerCase();

      return of( this.allJobs.filter( job => {
        return ( filters.all ? ( job.title.toLocaleLowerCase().indexOf( filters.all ) > -1 ||
          job.text.toLocaleLowerCase().indexOf( filters.all ) > -1 ) : true ) &&
          ( filters.city ? job.city.toLocaleLowerCase().indexOf( filters.city ) > -1 : true );
      } ) );
    }
  }

  addNewJob( job: any ) {
    this.allJobs.push( {
      id: this.allJobs.length,
      title: job.title,
      city: job.city,
      text: job.text
    } )
  }
}


