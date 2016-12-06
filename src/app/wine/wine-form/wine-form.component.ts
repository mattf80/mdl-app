import { Grape, Blend } from './../../models/grape';

import { Wine } from './../../models/wine';
import { Country } from './../../models/country';
import { WineService } from './../../services/wine-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private wineGrapes: Blend[] = [{ grape: null, percentage: null }];
  private isNew: boolean = true;
  private subscription: Subscription;

  public countries: Country[];

  public grapes: Grape[];

  constructor(
    private wineService: WineService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.wineId = +params['id'];
          this.wineService.getWine(this.wineId)
            .subscribe(data => {
              this.wine = data;
              this.getGrapesAndCountries();
            });
        } else {
          this.isNew = true;
          this.wine = new Wine(null,{name: '', vintage: null, colour: '', shortDesc: '', imageUrl:'', country:null, blend:[]})
          this.getGrapesAndCountries();
        }
        this.initForm();
      }
    );
  }

  addGrape() {
    const control = <FormArray>this.wineForm.controls['blend'];
    control.push(this.initGrapes());

  }

  getGrapesAndCountries() {
    this.wineService.getReferenceData()
      .subscribe(data => {
        this.grapes = data[0];
        this.countries = data[1];
        if (!this.isNew) {
          this.populateForm();
        }
      });
  }

  removeGrape(i: number) {
    // remove address from the list
    const control = <FormArray>this.wineForm.controls['blend'];
    control.removeAt(i);
  }

  onSubmit() {
    const newWine: Wine = this.wineForm.value;

    if (this.isNew) {
      this.wineService.addWine(newWine)
        .subscribe(data => {
          console.log(data);
        })
    }
    else {
      console.log(newWine);
      //this.wineService.editWine(this.wine, newWine);
    }
    this.naviagteBack();
  }

  naviagteBack() {
    this.router.navigate(['/wine']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initGrapes() {
    return this.formBuilder.group({
      grape: { id: null, name: null },
      percentage: ['']
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
    let wineBlend: FormArray = new FormArray([]);

    if (this.isNew) {
      wineBlend.push(
        this.initGrapes()
      )
    }

    this.wineForm = this.formBuilder.group({
      id: [wineId],
      name: [wineName, Validators.required],
      vintage: [wineVintage, Validators.required],
      country: [wineCountry],
      shortDesc: [wineShortDesc],
      colour: [wineColour],
      imageUrl: [wineImageUrl],
      blend: wineBlend
    })

  }

  private populateForm() {

    this.wineForm.patchValue({ id: this.wine.id });
    this.wineForm.patchValue({ name: this.wine.wine.name });
    this.wineForm.patchValue({ vintage: this.wine.wine.vintage });
    this.wineForm.patchValue({ colour: this.wine.wine.colour });
    this.wineForm.patchValue({ imageUrl: this.wine.wine.imageUrl });
    this.wineForm.patchValue({ shortDesc: this.wine.wine.shortDesc });

    let selectedCountry = (this.countries.filter(x => x.id === this.wine.wine.country.id))[0];

    (<FormControl>this.wineForm.controls['country'])
      .setValue(selectedCountry);

    (<FormControl>this.wineForm.controls['country'])
      .valueChanges.subscribe(country => this.wine.wine.country = country);

    this.wine.wine.blend.forEach((b) => {
      let grp = this.grapes.filter(g => g.id === b.grape.id);
      (<FormArray>this.wineForm.controls['blend']).push(
        this.formBuilder.group({
          grape: grp,
          percentage: [b.percentage]
        }));
    });
  }

  clearForm() {
    this.wineForm.reset();
  }

}


