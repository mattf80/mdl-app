import { Component } from '@angular/core';

@Component({
  templateUrl: './wine-home.component.html',
  styleUrls:[]
})
export class WineHomeComponent  {

  showForm: boolean = false;

  showWineForm() {
    this.showForm = !this.showForm;
  }

}



