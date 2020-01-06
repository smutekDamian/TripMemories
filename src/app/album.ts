import { Category } from './category';
import { Photo } from './photo';

export class Album {
  constructor(){
    this.photos = [];
  }

  albumId : number;
  title : string;
  lattitude: number;
  longitude: number;
  category: Category;
  photos: Photo[];
}
