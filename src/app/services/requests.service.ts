import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class Requests {
  BASE_URL: string = 'http://127.0.0.1:8080/api/v1/';

  constructor(private http: HttpClient) { }

  Login(obj: object) {
    let url = this.BASE_URL+"login";

    return this.http.post(url, obj);
  }

  GetUsers() {
    let url = this.BASE_URL+"user/all";

    return this.http.get(url);
  }

  GetUser(id: string) {
    let url = this.BASE_URL+"user/"+id;

    return this.http.get(url);
  }

  CreateUser(userData: object) {
    let url = this.BASE_URL+"user/create";

    return this.http.post(url, userData);
  }

  CreateRequest(requestData: object) {
    let url = this.BASE_URL+"request/create_request";

    return this.http.post(url, requestData);
  }

}
