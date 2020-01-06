import { Component, OnInit } from '@angular/core';
import { Marker } from './marker';
import { PhotosService } from './photos.service';
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
  currentAlbum : Album = new Album();

  constructor(private photosService: PhotosService) { }
  
  ngOnInit() {
    this.getAlbums();
    this.getMarkers();
  }
  private getAlbums() {
    this.albums = this.photosService.getAlbums();
  }

  onAlbumSelected(albumId: number) {
    let currentAlbum = this.albums.find(album => album.albumId == albumId);
    this.currentAlbum = currentAlbum == null ? new Album() : currentAlbum;
  }
  
  private getMarkers(): void{
    let markers = [];

    this.albums.forEach(album => {
      var markerPhoto = album.photos[0];
      var marker = new Marker(album.lattitude, album.longitude, markerPhoto.thumbnailSrc, album.category, album.albumId);
      markers.push(marker);
    });

    this.markers = markers;
  }
}
