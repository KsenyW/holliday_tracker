import { Component } from '@angular/core';
import { Requests } from "./../services/requests.service";

@Component({
  selector: "requests",
  templateUrl: './requests.component.html',
  providers: [Requests]
})

export class RequestsComponent{
  constructor(private requests: Requests) { }
}
