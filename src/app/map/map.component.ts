import { Component, OnInit, NgModule } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Marker } from '../marker';
import { MapConfigService } from '../map-config.service'
import { MarkerUtils } from '../utils/marker.utils';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  markers: Marker[];
  lat = 51.67742;
  lng = 7.92012;
  mapStyles : any;
  
  constructor(private photosService: PhotosService, private mapConfigService : MapConfigService, private markerUtils : MarkerUtils) { }

  ngOnInit() {
      this.getMarkers();
      this.getMapStyles();
  }

  private getMarkers(): void{
      let photos = this.photosService.getPhotos();
      let duplicatedMarkers = photos.map(photo => new Marker(photo.lattitude, photo.longitude, photo.src));
      let markers = [];
      for(let i = 0; i < duplicatedMarkers.length; i++){
        if (this.contains(markers, duplicatedMarkers[i]) == false) {
          markers.push(duplicatedMarkers[i]);
          this.markerUtils.fillWithThumbnail(duplicatedMarkers[i]);
        }
      }
      this.markers = markers;
  }

  private contains(array: Marker[], item: Marker) : boolean{
    for(let i = 0; i < array.length; i++){
      if (array[i].longitude === item.longitude && array[i].lattitude === item.lattitude) {
        return true;
      }
    }
    return false;
  }

  private getMapStyles(): void {
    this.mapStyles = this.mapConfigService.getMapStyles();
  }

}
