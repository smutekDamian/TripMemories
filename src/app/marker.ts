import { Category } from './category';

export class Marker {
  constructor(lattitude: number, longitude: number, thumbnailSrc: string, category : Category, albumId: number) {
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.thumbnailSrc = thumbnailSrc;
    this.category = category;
    this.albumId = albumId;
  }
  albumId : number;
  lattitude: number;
  longitude: number;
  thumbnailSrc: string;
  category: Category
}
