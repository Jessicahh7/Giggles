import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { GiggleService } from './services/giggle.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiggleComponent } from './giggle/giggle.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedComponent } from './featured/featured.component';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    GiggleComponent,
    HomeComponent,
    NavComponent,
    FeaturedComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    GiggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
