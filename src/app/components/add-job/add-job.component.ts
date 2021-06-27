import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { JobsService } from 'src/app/services/jobs.service';

@Component( {
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
} )

export class AddJobComponent implements OnInit {
  public Editor = ClassicEditor;

  jobForm = new FormGroup( {
    title: new FormControl( '', [Validators.required] ),
    city: new FormControl( '', [Validators.required] ),
    text: new FormControl( '', [Validators.required] )
  } );

  constructor( private jobsService: JobsService ) { }

  ngOnInit(): void {
  }

  addNewJob() {
    this.jobsService.addNewJob( this.jobForm.value );
  }

}
