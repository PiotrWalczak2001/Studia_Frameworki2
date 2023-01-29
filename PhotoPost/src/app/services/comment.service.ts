import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.getAllComments().pipe(
        map(comments => comments.filter(comment => comment.postId === postId)));
  }
}