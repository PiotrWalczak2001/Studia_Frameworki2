import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent } from './pages/albums/album/album.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PostBoardComponent } from './pages/post-board/post-board.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/:id', component: AlbumComponent},
  { path: 'photos', component: PhotosComponent },
  { path: 'posts', component: PostBoardComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}