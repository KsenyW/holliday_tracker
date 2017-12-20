import { Component } from '@angular/core';
import { Requests } from "./../services/requests.service";

@Component({
  selector: "reports",
  templateUrl: './reports.component.html',
  providers: [Requests]
})

export class ReportsComponent{
  constructor(private requests: Requests) { }
}
