import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Requests} from "./../services/requests.service";
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: "homepage",
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [Requests]
})

export class HomepageComponent{
  constructor(private requests: Requests,
              private router: Router,
              private cookieService:CookieService) { }
  requestForm: FormGroup;
  loginParams: object = {};
  UserId: string = this.cookieService.get("UserId") || '';

  ngOnInit(){
    this.requestForm = new FormGroup({
      'class': new FormControl('request'),
      'userId': new FormControl(this.UserId || ''),
      'managerId': new FormControl(''),
      requestTypeId: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      note: new FormControl('')
    });

    this.requests.GetUser(this.UserId).subscribe(resp => this.loginParams = resp);
  }

  createRequest(){
    // this.requests.CreateRequest(this.requestForm.value).subscribe(resp => console.log(resp));
  }
}
