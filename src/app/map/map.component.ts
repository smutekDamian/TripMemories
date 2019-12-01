import { Component, OnInit, NgModule } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../photo';
import { MapConfigService } from '../map-config.service'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
    photos: Photo[];
  lat = 51.67742;
  lng = 7.92012;
  mapStyles : any;
  
    constructor(private photosService: PhotosService, private mapConfigService : MapConfigService) { }

  ngOnInit() {
      this.getPhotos();
      this.getMapStyles();
  }

  getPhotos(): void{
      this.photos = this.photosService.getPhotos();
  }

  getMapStyles(): void {
    this.mapStyles = this.mapConfigService.getMapStyles();
  }

}
