import { Component, OnInit, Input } from '@angular/core';
import { Marker } from '../marker';
import { MapConfigService } from '../map-config.service'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  @Input() markers: Marker[];
  mapStyles : any;
  
  constructor(private mapConfigService : MapConfigService) { }

  ngOnInit() {

      this.getMapStyles();
  }

  private getMapStyles(): void {
    this.mapStyles = this.mapConfigService.getMapStyles();
  }

}
