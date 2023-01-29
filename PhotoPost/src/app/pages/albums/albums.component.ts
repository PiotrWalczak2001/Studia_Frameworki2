import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums: Observable<Album[]> = new Observable<Album[]>;
  constructor(private readonly albumService: AlbumService) {}

  ngOnInit() {
    this.albums = this.albumService.getAllAlbums();
  }
}