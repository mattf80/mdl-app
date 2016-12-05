import { CellarItem } from './../../models/cellar-item';
import { CellarService } from './../../services/cellar-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cellar-list',
  templateUrl: './cellar-list.component.html',
  styleUrls: ['./cellar-list.component.css']
})
export class CellarListComponent implements OnInit {

  items: CellarItem[];

  constructor(private cellarService: CellarService) { }

  ngOnInit() {
    this.getItems();
    this.cellarService.pushedData.subscribe(
      data => this.items.push(data)
    );
    }

  getItems() {
    return  this.cellarService.getItems()
    .subscribe(cellarItems => this.items = cellarItems);
  }

}
