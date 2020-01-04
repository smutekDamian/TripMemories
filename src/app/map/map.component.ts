import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Marker } from '../marker';
import { MapConfigService } from '../map-config.service'
import { Category } from '../category';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  @Input() markers: Marker[];
  @ViewChild('map', {static: false}) mapContainer : ElementRef;
  @ViewChild('filters', {static: false}) filters : ElementRef;
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
  }

  private getMapStyles(): void {
    this.mapStyles = this.mapConfigService.getMapStyles();
  }

}
