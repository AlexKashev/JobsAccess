import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { FormControl, FormGroup } from '@angular/forms';
import { StatusService } from 'src/app/services/status.service';

@Component( {
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
} )
export class JobsComponent implements OnInit {
  filterForm = new FormGroup( {
    all: new FormControl( '' ),
    city: new FormControl( '' )
  } );

  jobs = [];

  constructor( private statusService: StatusService, private jobsService: JobsService ) { }

  ngOnInit(): void {
    // this.statusService.getStatus().then( ( result: any ) => {
    //   console.log( result.status );
    // } );

    this.getCurrentJobsData();

    // subscribe for filtering
    this.jobsService.currentFilter.subscribe( ( data: string ) => {
      this.getCurrentJobsData( data );
    } );
  }

  getCurrentJobsData( data?: any ) {
    this.jobsService.getFilteredJobs( data ).subscribe( ( result: any ) => {
      this.jobs = result;
      console.log( result );
    } );
  }

}
