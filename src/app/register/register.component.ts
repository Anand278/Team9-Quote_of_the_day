import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;
  public faQuoteRight = faQuoteRight;
  
  public uiInvalidCredential = false;

  // public fbFormGroup = this.fb.group({
  //   username: ['', Validators.required],
  //   email: ['', Validators.required, ],
  //   password: ['', Validators.required],
  //   confirmpassword: ['', Validators.required],
  // });


  public fbFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)
      , Validators.pattern('[a-zA-Z0-9]*')]), 
      password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]),
   email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
  });


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async signuphere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);

    this.fbFormGroup.reset();
  }
}
