import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
} )
export class HeaderComponent implements OnInit {
  fontSizeIncreased = false;

  constructor( private jobsService: JobsService ) { }

  ngOnInit(): void {
  }

  increasePageFontSize() {
    document.body.style.fontSize = 20 + 'px';

    this.fontSizeIncreased = true;
  }

  decreasePageFontSize() {
    document.body.style.fontSize = 16 + 'px';

    this.fontSizeIncreased = false;
  }

  goToSearchForm() {
    this.jobsService.focusSearchForm.next();
  }
}
