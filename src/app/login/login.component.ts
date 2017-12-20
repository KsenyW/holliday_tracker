import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Requests} from './../services/requests.service';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Requests]
})

export class LoginComponent {
  constructor(private requests: Requests,
              private router: Router,
              private cookieService: CookieService) { }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  log() {
    this.cookieService.put('UserId', '4');
    this.router.navigate(['home']);
  }
}


