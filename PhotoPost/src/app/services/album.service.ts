import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private httpClient: HttpClient) {}

  getAllAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbumById(id: number): Observable<Album> {
    return this.httpClient.get<Album>('https://jsonplaceholder.typicode.com/albums/' + id);
  }
}