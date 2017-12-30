import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';

import { NgxGalleryModule } from 'ngx-gallery';

import { ArtWorkService } from '../services';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { InstagramLinkComponent } from './instagram-link/instagram-link.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InstagramLinkComponent,
    ToolbarComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgxGalleryModule
  ],
  providers: [ ArtWorkService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
