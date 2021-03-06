import { Component, OnInit, Input } from '@angular/core';
import { ScrollUtils } from '../utils/scroll-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = "Trip Memories"
  subtitle = "Never forget your memories..."
  backgroundImage = "/assets/header.jpg"
  @Input() buttonScrollElementId : string

  constructor() { }

  ngOnInit() {
  }

  buttonClickHandler(): void {
    ScrollUtils.scrollTo(this.buttonScrollElementId);
  }
}
