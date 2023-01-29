import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  getAllPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/photos/');
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.getAllPhotos().pipe(
        map(photos => photos.filter(photo => photo.albumId === id)));
  }
}