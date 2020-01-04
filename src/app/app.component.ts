import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { Marker } from './marker';
import { PhotosService } from './photos.service';
import { MarkerUtils } from './utils/marker.utils';
import { Album } from './album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'trip-memories';
  markers: Marker[];
  albums: Album[];

  constructor(private photosService: PhotosService, private markerUtils : MarkerUtils) { }
  
  ngOnInit() {
    this.getAlbums();
    this.getMarkers();
  }
  private getAlbums() {
    this.albums = this.photosService.getAlbums();
  }

  getCurrentAlbum() : Album{
    return this.albums.find(album => album.albumId == 2);
  }
  
  private getMarkers(): void{
    let markers = [];

    this.albums.forEach(album => {
      var markerPhoto = album.photos[0];
      var marker = new Marker(album.lattitude, album.longitude, markerPhoto.thumbnailSrc, album.category);
      this.markerUtils.fillWithThumbnail(marker);
      markers.push(marker);
    });

    this.markers = markers;
  }
}
