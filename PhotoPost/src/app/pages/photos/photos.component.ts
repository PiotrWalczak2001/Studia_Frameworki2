import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { User } from 'src/app/models/user';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: Observable<Photo[]> = new Observable<Photo[]>;
  user: Observable<User> = new Observable<User>();
  
  constructor(private readonly photoService: PhotoService) {}

  ngOnInit() {
    this.photos = this.photoService.getAllPhotos().pipe(map(photos => photos.slice(0,100))); // for tests
  }

  filterPhotos(filterValue: string) {
    const isFullNumber: boolean = Number.isInteger(Number(filterValue)) && filterValue !== null
    if(isFullNumber){
      const id = Number(filterValue);
      const newPhotos = this.photoService.getAllPhotos();
      newPhotos.pipe( 
        map( photos => { return photos.filter(photo => photo.albumId === id) }),
        ).subscribe(result => this.photos = of(result))
    }
  }
}