export class Marker {
  constructor(lattitude, longitude, thumbnailSrc) {
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.thumbnailSrc = thumbnailSrc;
  }
  lattitude: number;
  longitude: number;
  thumbnailSrc: string;
  thumbnailBase64: string;
}
