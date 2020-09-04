import { Component, OnInit } from '@angular/core';
import {faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;
  public faQuoteRight = faQuoteRight;

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async submithere() {
    const data = this.fbFormGroup.value;

    // ajax call
    const url = 'http://localhost:3000/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
      this.fbFormGroup.reset();
    } else {
      this.uiInvalidCredential = true;
      this.fbFormGroup.reset();
    }
  }
}
