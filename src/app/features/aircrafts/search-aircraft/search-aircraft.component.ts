import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sa-search-aircraft',
  templateUrl: './search-aircraft.component.html',
  styleUrls: ['./search-aircraft.component.css']
})
export class SearchAircraftComponent implements OnInit {

  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateSearchModel(value) {
    this.searchModel = value;
    console.log(value);
    this.searchModelChange.emit(this.searchModel);
  }

}
