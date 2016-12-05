import { Grape } from './../models/grape';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  selectedGrape: Grape[];
  private grape: Grape;

  ngOnInit() {
    this.initForm();
    this.fetchGrapes();
  }

  private initForm() {
    let grapeName: string = "Foo";

    this.grapeForm = this.formBuilder.group({
      name: [grapeName, Validators.required],
      hobbies: this.formBuilder.array([
        this.initHobbies(),
      ])
    })
  }

  fetchGrapes() {
    return this.wineService.getGrapes()
      .subscribe(grapes => this.grapes = grapes);
  }

  initHobbies() {
    return this.formBuilder.group({
            name: ['', Validators.required],
            rating: ['']
        });
  }

}
