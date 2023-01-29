import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: Observable<Photo[]> = new Observable<Photo[]>;
  constructor(private readonly photoService: PhotoService) {}

  ngOnInit() {
    this.photos = this.photoService.getAllPhotos().pipe(map(photos => photos.slice(0,100))); // for tests
  }
}