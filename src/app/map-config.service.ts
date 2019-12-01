import { Injectable } from '@angular/core';
import * as mapConfig from '../assets/config/map-config.json';

@Injectable({
  providedIn: 'root'
})
export class MapConfigService {
  constructor() { }

  getMapStyles() : any[]{
    return mapConfig.styles;
  }
}
