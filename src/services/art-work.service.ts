import { Injectable } from '@angular/core';

import { ArtWork } from '../models';

import { ART_WORKS } from '../data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ArtWorkService {

  constructor() { }

  public getArtWorkThumbs(): Observable<ArtWork[]> {
    return Observable.of(ART_WORKS);
  }

}
