import { Wine } from './../../models/wine';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.css']
})
export class WineCardComponent implements OnInit {

  @Input() wine: Wine;
  constructor() { }

  ngOnInit() {
  }

}
