import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlbumCoverComponent } from './shared/album-cover/album-cover.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumComponent } from './pages/albums/album/album.component';
import { PhotoCoverComponent } from './shared/photo-cover/photo-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumComponent,
    PageNotFoundComponent,
    AlbumCoverComponent,
    PhotoCoverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
