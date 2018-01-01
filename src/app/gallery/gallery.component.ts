import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

  import { Observable } from 'rxjs/Observable';

import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

import { GalleryService } from '../../services';

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

  epoch: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private galleryService: GalleryService) { }

  ngOnInit() {

    // this.epoch = this.route.snapshot.paramMap.get('epoch');
    // console.log(`Epoch: ${this.epoch}`);

    this.route.params.subscribe(params => {
      this.epoch = params['epoch'];
      // console.log(`Params Change: ${params['epoch']}`);
      this.galleryImages = this.galleryService.getGallery(this.epoch);
    });

    this.galleryOptions = [
      {
        width: '800px',
        height: '450px',
        thumbnailsColumns: 4,
        fullWidth: false,
        previewFullscreen: true,
        previewCloseOnEsc: true,
        imageSize: 'contain'
      }
    ];
  }
}
