import { Component, OnInit } from '@angular/core';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;


  constructor() { }

  ngOnInit(): void {
  }

}
