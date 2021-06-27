import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';

@Component( {
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
} )
export class JobComponent implements OnInit {
  jobId: number;
  job: any;

  constructor( private route: ActivatedRoute, private jobsService: JobsService ) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];

    this.jobsService.getJobById( this.jobId ).subscribe( result => {
      this.job = result;
    } );
  }

}
