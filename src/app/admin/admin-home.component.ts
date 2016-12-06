import { Country } from './../models/country';
import { Grape } from './../models/grape';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { WineService } from './../services/wine-service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private wineService: WineService,
    private formBuilder: FormBuilder) { }

  grapeForm: FormGroup;
  grapes: Grape[];
  selectedGrape: Grape;
  private grape: Grape;

  countries: Country[] = [];
  selectedCountries: Country[] = [];

  ngOnInit() {
    this.initForm();
    this.getGrapesAndCountries();
  }

  private initForm() {
    let grapeName: string = "Foo";

    this.grapeForm = this.formBuilder.group({
      name: [grapeName, Validators.required],
      hobbies: this.formBuilder.array([
        this.initHobbies(),
      ]),
      grapeCountries: this.formBuilder.array([])
    })
  }

  getGrapesAndCountries() {
    this.wineService.getReferenceData()
      .subscribe(data => {
        this.grapes = data[0];
        this.countries = data[1];
        this.populateForm();
      });
  }


  populateForm() {
    this.selectedCountries.push(this.countries[1], this.countries[4]);

    this.selectedCountries.forEach(
      (co) => (<FormArray>this.grapeForm.controls['grapeCountries']).push(
        this.formBuilder.group({
          countryName: [co.name],
          country: [co]
        })
      )
    )
  }

  initHobbies() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      rating: ['']
    });
  }

}
