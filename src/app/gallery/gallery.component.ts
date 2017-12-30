import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

// import { ArtWorkService } from '../../services';

// import { ArtWork } from '../../models/index';
// import * as constants from '../../constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  // artWorks: Observable<ArtWork[]>;
  // fileLocation = constants.IMAGE_PATH_HD;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
//    this.artWorks = this.artWorkService.getArtWorkThumbs();

    this.galleryOptions = [
      {
        width: '800px',
        height: '450px',
        thumbnailsColumns: 4,
        fullWidth: false,
        previewFullscreen: true,
        previewCloseOnEsc: true
      }
    ];

    this.galleryImages = [
      {
        description: 'Ambivalence',
        small: 'assets/art-work/small/ambivalence.jpg',
        medium: 'assets/art-work/medium/ambivalence.jpg',
        big: 'assets/art-work/hd/ambivalence.jpg'
      },
      {
        description: 'Anatomy',
        small: 'assets/art-work/small/anatomy.jpg',
        medium: 'assets/art-work/medium/anatomy.jpg',
        big: 'assets/art-work/hd/anatomy.jpg'
      },
      {
        description: 'Jupiter',
        small: 'assets/art-work/small/jupiter.jpg',
        medium: 'assets/art-work/medium/jupiter.jpg',
        big: 'assets/art-work/hd/jupiter.jpg'
      },
      {
        description: 'Kid',
        small: 'assets/art-work/small/kid.jpg',
        medium: 'assets/art-work/medium/kid.jpg',
        big: 'assets/art-work/hd/kid.jpg'
      },
      {
        description: 'Void`',
        small: 'assets/art-work/small/void.jpg',
        medium: 'assets/art-work/medium/void.jpg',
        big: 'assets/art-work/hd/void.jpg'
      }
    ];
  }

}
