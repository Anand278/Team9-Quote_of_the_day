import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder ) { }
  public pid = new FormControl('',Validators.required);
  ngOnInit(): void {
  }
  public alert1 = false;
  public alert2 = false;
  public delete = async ()=>{
    let url = "http://localhost:3000/delete";
    let data : number  = this.pid.value;
    let id = {"id" : data};
    let results: any = await this.http.post(url, id).toPromise();
    // console.log(results);
    if (results.message === "success post") {
      this.alert2 = false;
    }
    this.pid.reset();
  }
  }

