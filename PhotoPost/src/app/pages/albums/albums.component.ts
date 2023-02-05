import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, of } from 'rxjs';
import { Album } from 'src/app/models/album';
import { User } from 'src/app/models/user';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums: Observable<Album[]> = new Observable<Album[]>;
  users: Observable<User[]> = new Observable<User[]>();
  
  constructor(private readonly albumService: AlbumService) {}

  ngOnInit() {
    this.albums = this.albumService.getAllAlbums();
  }

  deleteAlbumById(e: number) {
    this.albums.pipe( 
      map( albums => {return albums.filter(album => album.id !== e)}),
      ).subscribe(result => this.albums = of(result))
  }

  filterAlbums(filterValue: string) {
    const isFullNumber: boolean = Number.isInteger(Number(filterValue)) && filterValue !== null
    if(isFullNumber){
      const id = Number(filterValue);
      const newAlbums = this.albumService.getAllAlbums();
      newAlbums.pipe( 
        map( albums => { return albums.filter(album => album.userId === id) }),
        ).subscribe(result => this.albums = of(result))
    }
  }
}