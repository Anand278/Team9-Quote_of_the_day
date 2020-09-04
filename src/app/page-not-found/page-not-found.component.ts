import { Component, OnInit } from '@angular/core';
import {faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;
  public faQuoteRight = faQuoteRight;

  constructor() { }

  ngOnInit(): void {
  }

}
