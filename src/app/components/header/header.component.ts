import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
} )
export class HeaderComponent implements OnInit {
  fontSizeIncreased = false;

  constructor() { }

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
}
