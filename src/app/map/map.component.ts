import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Marker } from '../marker';
import { MapConfigService } from '../map-config.service'
import { Category } from '../category';
import { AgmMarker } from '@agm/core';
import { ScrollUtils } from '../utils/scroll-utils';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  @Input() markers: Marker[];
  @Input() galleryComponentId: string;
  @ViewChild('map', {static: false}) mapContainer : ElementRef;
  @ViewChild('filters', {static: false}) filters : ElementRef;
  @Output() albumSelected = new EventEmitter<number>(); 
  mapStyles : any;
  categories : Category[] = [];
  selectedCategories : Category[] = [];
  
  constructor(private mapConfigService : MapConfigService) { }

  ngOnInit() {
    this.getMapStyles();
    this.markers.forEach(marker => {
      if (!this.categories.some(category => category.code == marker.category.code)) {
        this.categories.push(marker.category)
      }
    })
  }
  mapReady(){
    setTimeout(() => {
      this.markers.forEach(marker => {
        marker.isActive = true;
      })
    },500)
  }

  showFilters() : void {
    this.filters.nativeElement.classList.add("expanded");
    this.mapContainer.nativeElement.classList.add("filters_expanded");
  }
  
  closeFilters() : void {
    this.filters.nativeElement.classList.remove("expanded");
    this.mapContainer.nativeElement.classList.remove("filters_expanded");
  }

  selectCategory(category: Category) : void {
    var selectedCategoryEl = document.getElementById(category.code);
    if (selectedCategoryEl.classList.contains("selected")) {
      this.selectedCategories.splice(this.selectedCategories.indexOf(category), 1);
      selectedCategoryEl.classList.remove("selected");
    }
    else{
      this.selectedCategories.push(category);
      selectedCategoryEl.classList.add("selected");
    }
    this.filterMarkers();
  }

  private filterMarkers() : void {
    this.markers.map(marker => marker.isActive = true)
    if (this.selectedCategories.length == 0) {
      return;
    }
    this.markers.forEach(marker => {
      if(!this.selectedCategories.some(category => category.code == marker.category.code)) {
        marker.isActive = false;
      }
    }); 
  }

  showAlbum(marker: AgmMarker, albumId: number) {
    this.albumSelected.emit(albumId);
    setTimeout(()=> {
      ScrollUtils.scrollTo(this.galleryComponentId);
    }, 100)
  }

  private getMapStyles(): void {
    this.mapStyles = this.mapConfigService.getMapStyles();
  }

}
