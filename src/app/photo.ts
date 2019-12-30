export class Photo {
  constructor(lattitude, longitude, src, thumbnailSrc) {
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.src = src;
    this.thumbnailSrc = thumbnailSrc;
  }
  lattitude: number;
  longitude: number;
  src : string;
  thumbnailSrc : string;
}
