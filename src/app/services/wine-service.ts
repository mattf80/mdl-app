import { Grape } from './../models/grape';
import { Country } from './../models/country';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Wine } from './../models/wine';



@Injectable()
export class WineService {

  private baseUrl = 'app/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getWines(): Observable<Wine[]> {
    return this.http.get(this.baseUrl + 'wines')
      .map(response => response.json().data as Wine[])
      .catch(this.handleError);
  }

  getWine(id: number): Observable<Wine> {
    let wine$ = this.http.get(`${this.baseUrl}wines/${id}`, {headers: this.headers})
      .map(response => response.json().data as Wine)
      .catch(this.handleError);

    return wine$;
  }

    getWinePromise(id: number): Promise<Wine> {
    return this.http.get(`${this.baseUrl}wines/${id}`, {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Wine)
      .catch(this.handleError);

  }

  getCountries(): Observable<Country[]> {
    return this.http.get(this.baseUrl + 'countries')
      .map(response => response.json().data as Country[])
      .catch(this.handleError);
  }

  getGrapes(): Observable<Grape[]> {
    return this.http.get(this.baseUrl + 'grapes')
      .map(response => response.json().data as Grape[])
      .catch(this.handleError);
  }

  addWine(wine: Wine): Observable<Wine> {
    console.log(wine);
    return this.http
      .post(this.baseUrl + 'wines', JSON.stringify({ wine }), { headers: this.headers })
      .map(res => res.json().data.model as Wine)
      .catch(this.handleError);
  }

  editWine(oldWine: Wine, newWine: Wine) {
    const url = `${this.baseUrl}wines/${oldWine.id}`;
    return this.http
      .put(url, JSON.stringify(newWine), { headers: this.headers })
      .map(res => res.json().data.model as Wine)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}