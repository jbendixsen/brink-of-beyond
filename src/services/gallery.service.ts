import { Injectable } from '@angular/core';

// import { GalleryItem } from '../models';
import { NgxGalleryImage } from 'ngx-gallery';


import { RECENT_GALLERY } from '../data';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

@Injectable()
export class GalleryService {

  constructor() { }

  public getGallery(epoch: string): NgxGalleryImage[] {
    console.log(`Epoch: ${epoch}`);
    return RECENT_GALLERY;
  }

}
