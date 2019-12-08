import { Injectable } from '@angular/core';
import { Photo } from './photo';
import * as photosConfig from '../assets/photos_config/photos-config.json';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getPhotos(): Photo[] {
    return photosConfig.photos;
  }
}
