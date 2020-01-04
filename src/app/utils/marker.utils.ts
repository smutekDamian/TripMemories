import { Injectable } from '@angular/core';
import { Marker } from '../marker';

@Injectable({
  providedIn: 'root'
})
export class MarkerUtils {

  constructor() { }

  fillWithThumbnail(marker: Marker) : void {
    var thumbnailMaxWidth = 60;
    var thumbnailMaxHeight = 60;
    var circleRadius = 20;

    var image = new Image();
    image.src = marker.thumbnailSrc;
    image.style.display = "none";
    image.style.zIndex = "-1000";
    image.onload = function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
  
      var thumbnailScale = (image.width / image.height) > (thumbnailMaxWidth / thumbnailMaxHeight) ?
          thumbnailMaxWidth / image.width :
          thumbnailMaxHeight / image.height;
      var thumbnailWidth = image.width * thumbnailScale;
      var thumbnailHeight = image.height * thumbnailScale;
  
      canvas.width = thumbnailWidth;
      canvas.height = thumbnailHeight;
      
      ctx.save();
      ctx.beginPath();
      ctx.arc(20, 20, circleRadius, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(image, 0, 0, thumbnailWidth, thumbnailHeight);
      ctx.lineWidth = 10;
      ctx.strokeStyle = marker.category.code;
      ctx.stroke();  
      ctx.beginPath();
      ctx.arc(0, 0, circleRadius, 0, Math.PI * 2, true);
      ctx.clip();
      ctx.closePath();
      ctx.restore();
  
      var thumbnail =  canvas.toDataURL('image/png', 100);
      marker.thumbnailSrc = thumbnail;
    }
  }
}
 