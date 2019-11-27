import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = "Trip Memories"
  subtitle = "Never forget your memories..."
  backgroundImage = "/assets/header.jpg"
  constructor() { }

  ngOnInit() {
  }

}
