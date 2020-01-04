import { Category } from './category';

export class Marker {
  constructor(lattitude: number, longitude: number, thumbnailSrc: string) {
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.thumbnailSrc = thumbnailSrc;
  }
  lattitude: number;
  longitude: number;
  thumbnailSrc: string;
  category: Category
}
