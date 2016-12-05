import { CellarItem } from './../models/cellar-item';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Wine } from './../models/wine';

@Injectable()
export class CellarService {
  pushedData = new EventEmitter<CellarItem>();
  private items: CellarItem[] = [];
  private baseUrl = 'app/cellarItems';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getItems(): Observable<CellarItem[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json().data as CellarItem[])
      .catch(this.handleError);
  }

  addItem(item: CellarItem): Observable<CellarItem> {
    return this.http.post(this.baseUrl, {item}, this.options)
      .map(response => response.json().data as CellarItem)
      .catch(this.handleError);
   

  }

    pushData(item: CellarItem) {
    this.pushedData.emit(item);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}