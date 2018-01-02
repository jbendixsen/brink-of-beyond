import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';

import { NgxGalleryModule } from 'ngx-gallery';

import { GalleryService } from '../services';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { InstagramLinkComponent } from './instagram-link/instagram-link.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { BioComponent } from './bio/bio.component';
import { ToolbarNavComponent } from './toolbar-nav/toolbar-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InstagramLinkComponent,
    ToolbarComponent,
    GalleryComponent,
    FooterComponent,
    MainContentComponent,
    SideNavComponent,
    BioComponent,
    ToolbarNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgxGalleryModule,
    AppRoutingModule
  ],
  providers: [ GalleryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
