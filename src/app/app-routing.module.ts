import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { GiggleComponent } from "./giggle/giggle.component";
import { FeaturedComponent } from './featured/featured.component';
import { PictureComponent } from './picture/picture.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'giggles', component: GiggleComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'picture', component: PictureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
