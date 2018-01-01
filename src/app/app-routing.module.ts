import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:epoch', component: GalleryComponent },
  { path: 'bio', component: BioComponent },
  { path: '', redirectTo: '/gallery/recent', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
