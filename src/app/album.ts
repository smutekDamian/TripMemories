import { Category } from './category';
import { Photo } from './photo';

export class Album {
  constructor(lattitude, longitude){
    this.lattitude = lattitude;
    this.longitude = longitude;
  }
  albumId : number;
  lattitude: number;
  longitude: number;
  category: Category;
  photos: Photo[];
}
