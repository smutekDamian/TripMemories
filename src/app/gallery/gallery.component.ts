import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  @Input() photos : Photo[];

  constructor() { }

  ngOnInit() {
  }

}
