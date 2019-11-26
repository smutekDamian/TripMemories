import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  lat = 51.67742;
  lng = 7.92012;
  constructor() { }

  ngOnInit() {
  }

}
