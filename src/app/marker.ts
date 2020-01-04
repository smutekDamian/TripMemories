import { Category } from './category';

export class Marker {
  constructor(lattitude: number, longitude: number, thumbnailSrc: string, category : Category) {
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.thumbnailSrc = thumbnailSrc;
    this.category = category;
  }
  lattitude: number;
  longitude: number;
  thumbnailSrc: string;
  category: Category
}
