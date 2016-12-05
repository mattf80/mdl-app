import { Grape, Blend } from './../../models/grape';

import { Wine } from './../../models/wine';
import { Country } from './../../models/country';
import { WineService } from './../../services/wine-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent implements OnInit, OnDestroy {
  wineForm: FormGroup = new FormGroup({});
  private wineId: number;
  private wine: Wine;
  private isNew: boolean = true;
  private subscription: Subscription;

  public countries: Country[];
  public grapes: Grape[];

  constructor(
    private wineService: WineService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.wineService.getCountries()
      .subscribe(countries => this.countries = countries);

    this.wineService.getGrapes()
      .subscribe(grapes => this.grapes = grapes);

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.wineId = +params['id'];
          this.wineService.getWine(this.wineId)
            .subscribe(wine => {
              this.wine = wine;
              this.populateForm();
            });
        } else {
          this.isNew = true;
          this.wine = new Wine(null, '', null, '', '', '', null, [])

        }
        this.initForm();
      }
    );
  }

  addGrape() {
    const control = <FormArray>this.wineForm.controls['blend'];
    control.push(this.initGrapes());

  }

  removeGrape(i: number) {
    // remove address from the list
    const control = <FormArray>this.wineForm.controls['blend'];
    control.removeAt(i);
  }

  onSubmit() {
    const newWine: Wine = this.wineForm.value;

    if (this.isNew) {
      this.wineService.addWine(newWine);
    }
    else {
      console.log(newWine);
      //this.wineService.editWine(this.wine, newWine);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initGrapes() {
    return this.formBuilder.group({
      grape: { id: null, name: null },
      percentage: ['50']
    });
  }


  private initForm() {
    let wineId: number = null;
    let wineName: string = '';
    let wineVintage: number = null;
    let wineCountry: Country = { id: null, name: null };
    let wineColour: string = '';
    let wineShortDesc: string = '';
    let wineImageUrl: string = '';
    let wineBlend: Blend[] = [{ grape: null, percentage: null }];

    this.wineForm = this.formBuilder.group({
      id: [wineId],
      name: [wineName, Validators.required],
      vintage: [wineVintage, Validators.required],
      country: [wineCountry],
      shortDesc: [wineShortDesc],
      colour: [wineColour],
      imageUrl: [wineImageUrl],
      blend: this.formBuilder.array([
        this.initGrapes(),
      ])
    })

  }

  private populateForm() {
/*
    for (let i = 0; i < this.wine.blend.length; i++) {
      const control = <FormArray>this.wineForm.controls['blend'];
      control.push(
        new FormGroup ({
          grape: new FormControl(this.wine.blend[i].grape),
          percentage: new FormControl(this.wine.blend[i].percentage)
      })
      );
    }
    */

    (<FormGroup>this.wineForm)
      .setValue(this.wine, { onlySelf: true });


    (<FormControl>this.wineForm.controls['country'])
     .setValue(this.wine.country.id, { onlySelf: true });

  }

}


