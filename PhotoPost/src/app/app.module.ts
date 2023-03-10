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
import { PhotosComponent } from './pages/photos/photos.component';
import { PostBoardComponent } from './pages/post-board/post-board.component';
import { PostFrameComponent } from './shared/post-frame/post-frame.component';
import { LoginPanelComponent } from './pages/login-panel/login-panel.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostCommentComponent } from './shared/post-frame/post-comment/post-comment.component';
import { FilterBarComponent } from './shared/filter-bar/filter-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    AlbumsComponent,
    AlbumComponent,
    PageNotFoundComponent,
    AlbumCoverComponent,
    PhotosComponent,
    PhotoCoverComponent,
    PostBoardComponent,
    PostFrameComponent,
    ProfileComponent,
    PostCommentComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
