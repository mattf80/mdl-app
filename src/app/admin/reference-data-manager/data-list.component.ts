import { Component, OnInit, Input } from '@angular/core';
import { Grape } from './../../models/grape';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  @Input()
  items: Array<any>;
  userFilter: string = '';

  constructor() { }

  ngOnInit() {
  }

}
