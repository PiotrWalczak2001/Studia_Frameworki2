import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-board',
  templateUrl: './post-board.component.html',
  styleUrls: ['./post-board.component.scss'],
})
export class PostBoardComponent implements OnInit {
    posts: Observable<Post[]> = new Observable<Post[]>;

    constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getAllPosts().pipe(map(posts => posts.slice(0,100)));
  }
}