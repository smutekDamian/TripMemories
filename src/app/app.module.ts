import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AgmOverlays } from "agm-overlays";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

const appRoutes : Routes = [
  {path: 'image/:src', component: ImageModalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    FooterComponent,
    GalleryComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAB5Jgh7NRxylVsxkb00nO5JPPRt0En7s'
    }),
    RouterModule.forRoot(appRoutes),
    LazyLoadImageModule,
    AgmOverlays,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
