import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
} )
export class SearchComponent implements OnInit {
  @ViewChild( 'search' ) searchElement: ElementRef;

  searchForm = new FormGroup( {
    all: new FormControl( '' ),
    city: new FormControl( '' )
  } );
  focusSub: any;

  constructor( private jobsService: JobsService ) { }

  ngOnInit(): void {
    this.focusSub = this.jobsService.focusSearchForm.subscribe( ( data: string ) => {
      this.searchElement.nativeElement.focus();
    } );
  }

  searchForJobs() {
    this.jobsService.currentFilter.next( this.searchForm.value );
    this.searchForm.reset( {
      all: '',
      city: ''
    } );
  }
}
