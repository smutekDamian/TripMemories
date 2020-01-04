import { Injectable } from '@angular/core';
import * as photosConfig from '../assets/photos_config/photos-config.json';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getAlbums(): Album[] {
    return photosConfig.albums;
  }
}
