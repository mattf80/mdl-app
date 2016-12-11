import { Country } from './../../models/country';
import { AdminService } from './../../services/admin-service';
import { Grape } from './../../models/grape';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reference-data-manager',
  templateUrl: './reference-data-manager.component.html',
  styleUrls: ['./reference-data-manager.component.css']
})
export class ReferenceDataManagerComponent implements OnInit {

  grapes: Grape[];
  countries: Country[];

  objectType: string;
  items: Array<any>;
  name: any;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getGrapes();
  }

  getGrapes() {
    this.objectType = 'grapes';
    return this.adminService.getItems<Grape>(this.objectType)
      .subscribe(grapes => {
        this.items = grapes;
      });
  }
  getCountries() {
    this.objectType = 'countries'
    return this.adminService.getItems<Country>(this.objectType)
      .subscribe(countries => {
        this.items = countries;
      });
  }

  addItem(form: NgForm) {
    console.log(form);
    this.adminService.addItem(form.value, this.objectType)
      .subscribe(data => {
        console.log(data);
        this.items.push(data);
        form.resetForm();
      })
  }
}
