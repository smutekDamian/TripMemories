import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getPhotos(): Photo[] {
    return [
      new Photo(50.025962, 19.917129),
      new Photo(51.513383, 20.247464)
    ]  
  }
}
