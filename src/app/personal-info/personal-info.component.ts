import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;
 

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

}
