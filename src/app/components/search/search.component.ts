import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
} )
export class SearchComponent implements OnInit {
  searchForm = new FormGroup( {
    all: new FormControl( '' ),
    city: new FormControl( '' )
  } );

  constructor( private jobsService: JobsService ) { }

  ngOnInit(): void {
  }

  searchForJobs() {
    this.jobsService.currentFilter.next( this.searchForm.value );
  }
}
