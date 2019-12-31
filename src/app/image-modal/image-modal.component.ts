import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.less']
})
export class ImageModalComponent implements OnInit {
  @Input() image : string;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == "Escape"){
      this.closeModal();
    }
  }
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.image = this.route.snapshot.paramMap.get('src');
  }

  closeModal(){
    this.location.back();
  }
}
