import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Photo } from 'src/app/models/photo';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { AlbumService } from 'src/app/services/album.service';
import { PhotoService } from 'src/app/services/photo.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  showAlbums: boolean = true;
  showPhotos: boolean = false;
  showPosts: boolean = false;

  posts: Observable<Post[]> = new Observable<Post[]>;
  albums: Observable<Album[]> = new Observable<Album[]>();
  photos: Observable<Photo[]> = new Observable<Photo[]>();
  user: Observable<User> = new Observable<User>();
  
  constructor(private albumService: AlbumService,
              private postService: PostService,
              private photoService: PhotoService,
              private userService: UserService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const userIdValue = this.route.snapshot.paramMap.get('userId');
    const isFullNumber: boolean = Number.isInteger(Number(userIdValue)) && userIdValue !== null;
    if(isFullNumber) {
      const userId = Number(userIdValue);
      this.user = this.userService.getUserById(userId);
      this.posts = this.postService.getPostsByUserId(userId);
      this.albums = this.albumService.getAlbumsByUserId(userId);
      this.albums.subscribe(albums => 
      {
        let tempPhotos: Photo[] = [];
        const albumIdsByUser = albums.map(x => x.id);
        albumIdsByUser.forEach(albumid => {
          this.photoService.getAlbumPhotos(albumid).subscribe((albumPhotos) => {
            tempPhotos.push(...albumPhotos);
          })
        })
        this.photos = of(tempPhotos);
      } );
    }
  }

  getAlbumsTab() {
    this.showAlbums = true;
    this.showPhotos = false;
    this.showPosts = false;
  }

  getPhotosTab() {
    this.showAlbums = false;
    this.showPhotos = true;
    this.showPosts = false;
  }

  getPostsTab() {
    this.showAlbums = false;
    this.showPhotos = false;
    this.showPosts = true;
  }


  // to do
  deleteAlbumById(albumId: number) {

  }

  deletePost(postId: number) {
    this.posts.pipe( 
      map( posts => { return posts.filter(post => post.id !== postId)}),
      ).subscribe(result => { this.posts = of(result) })
  }

  deletePhotoById(photoId: number) {

  }
}