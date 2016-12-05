import { Wine } from './../../models/wine';
import { WineService } from './../../services/wine-service';
import { CellarService } from './../../services/cellar-service';
import { CellarItem } from './../../models/cellar-item';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cellar-form',
  templateUrl: './cellar-form.component.html',
  styleUrls: ['./cellar-form.component.css']
})
export class CellarFormComponent implements OnInit {

  wines: Wine[];
  item: CellarItem;
  items: CellarItem[];
  isAdd:boolean = true;
  units: string[] = ['Cases', 'Bottles'];

  constructor(private cellarService: CellarService,
              private wineService: WineService) { }

  ngOnInit() {
    this.getWines();
    this.item = new CellarItem(null, null, null);
    console.log(this.item);
  }

    getWines() {
    return  this.wineService.getWines()
    .subscribe(wines => this.wines = wines);
  }

  onSubmit(cellarItem: CellarItem) {
    if (!this.isAdd) {
      //Edit
    } else {
      //Add
      this.item = new CellarItem(cellarItem.wine, cellarItem.quantity, cellarItem.unit);
      this.cellarService.addItem(this.item).subscribe(
        data => this.cellarService.pushData(data)
      );
      
    }
  }



}
