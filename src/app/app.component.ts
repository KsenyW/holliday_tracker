import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private location: Location,
              private router: Router) { }

  ngOnInit() {
    console.log(this.location.path());
  }

  isActivePage(location) {
    return location == this.location.path();
  }

  logOut() {
    this.router.navigate(['login']);
  }
}
