import { Country } from './../models/country';
import { Grape } from './../models/grape';
import { CellarItem } from './../models/cellar-item';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Wine } from './../models/wine';

@Injectable()
export class AdminService {
  private baseUrl = 'app/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getItems<T>(arg: string): Observable<T[]> {
    let url = this.baseUrl + arg.toString();
    console.log(url);

    return this.http.get(url)
      .map(response => response.json().data);
  }

    addItem<T>(item: T, arg: string): Observable<any> {
      let url = this.baseUrl + arg.toString();
    return this.http
      .post(url, JSON.stringify({ item }), { headers: this.headers })
      .map(res => res.json().data);
  }
}
