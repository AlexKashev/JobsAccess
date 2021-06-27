import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-top-employers',
  templateUrl: './top-employers.component.html',
  styleUrls: ['./top-employers.component.scss']
} )
export class TopEmployersComponent implements OnInit {
  employers = [
    'bertelli',
    'fitnessfirst',
    'mike',
    'pexels',
    'sayles',
    'chranell',
    'taxes',
    'mooi',
    'slack'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
