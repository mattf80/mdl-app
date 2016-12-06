import { Country } from './../../models/country';
import { Grape } from './../../models/grape';
import { WineService } from './../../services/wine-service';
import { Wine } from './../../models/wine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  public wines: Wine[];
  grapes: Grape[];
  countries: Country[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getWines();
    this.getGrapes();
    this.getCountries();
  }

  getWines() {
    return  this.wineService.getWines()
    .subscribe(data => {
      this.wines = data;
      console.log(this.wines);
    });
  }
    getGrapes() {
    return  this.wineService.getGrapes()
    .subscribe(grapes => this.grapes = grapes);
  }
    getCountries() {
    return  this.wineService.getCountries()
    .subscribe(countries => this.countries = countries);
  }

}
