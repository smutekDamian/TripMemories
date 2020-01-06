import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Photo } from '../photo';
import { ScrollUtils } from '../utils/scroll-utils';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  @Input() photos : Photo[];
  @Input() title : string;
  @Input() mapContainerId : string;
  @ViewChild('goToMap', {static: false}) goToMapBtn : ElementRef;
  @ViewChild('galleryContainer', {static: false}) galleryContainer : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  showGallery() : boolean {
    return this.photos.length != 0;
  }
  @HostListener('window:scroll', ['$event'])
  handleGoToMapBtn() : void {
    if(window.pageYOffset > window.innerHeight * 1.7){
      this.goToMapBtn.nativeElement.classList.add("show");
    }
    else {
      this.goToMapBtn.nativeElement.classList.remove("show");
    }
  }

  goToMapBtnHandler() : void {
    ScrollUtils.scrollTo(this.mapContainerId);
  }
}
