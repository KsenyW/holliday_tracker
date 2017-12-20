import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Requests } from "./../services/requests.service";

@Component({
  selector: "settings",
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [Requests]
})

export class SettingsComponent{
  settingsForm: FormGroup;

  constructor(private requests: Requests) { }

  ngOnInit(){
    this.settingsForm = new FormGroup({
      email: new FormControl('', Validators.required),
      imap: new FormControl('', Validators.required),
      port: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      pass: new FormControl(''),
      smtf: new FormControl('')
    });
  }
}
