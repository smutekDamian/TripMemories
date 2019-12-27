import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { Marker } from './marker';
import { PhotosService } from './photos.service';
import { MarkerUtils } from './utils/marker.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'trip-memories';
  markers: Marker[];
  photos: Photo[];

  constructor(private photosService: PhotosService, private markerUtils : MarkerUtils) { }
  
  ngOnInit() {
    this.getPhotos();
    this.getMarkers();
  }
  private getPhotos() {
    this.photos = this.photosService.getPhotos();
  }
  
  private getMarkers(): void{
    let duplicatedMarkers = this.photos.map(photo => new Marker(photo.lattitude, photo.longitude, photo.src));
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
}
