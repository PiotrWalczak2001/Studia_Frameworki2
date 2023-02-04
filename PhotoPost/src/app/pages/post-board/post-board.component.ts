import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-board',
  templateUrl: './post-board.component.html',
  styleUrls: ['./post-board.component.scss'],
})
export class PostBoardComponent implements OnInit {
    posts: Observable<Post[]> = new Observable<Post[]>;
    user: Observable<User> = new Observable<User>();

    constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getAllPosts().pipe(map(posts => posts.slice(0,100)));
  }

  filterPosts(filterValue: string) {
    const isFullNumber: boolean = Number.isInteger(Number(filterValue)) && filterValue !== null
    if(isFullNumber){
      const id = Number(filterValue);
      const newPosts = this.postService.getAllPosts();
      newPosts.subscribe(x => console.log(x));
      newPosts.pipe( 
        map( posts => { return posts.filter(post => post.userId === id) }),
        ).subscribe(result => this.posts = of(result))
    }
  }
}