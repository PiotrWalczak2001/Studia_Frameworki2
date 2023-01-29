import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Photo } from 'src/app/models/photo';
import { AlbumService } from 'src/app/services/album.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-albums',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
    album: Observable<Album> = new Observable<Album>();
    albumPhotos: Observable<Photo[]> = new Observable<Photo[]>();
    constructor(private albumService: AlbumService, private photoService: PhotoService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.album = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.albumService.getAlbumById(Number(params.get('id')))));

        this.albumPhotos = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.photoService.getAlbumPhotos(Number(params.get('id')))));
    }
}