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
    allPosts: Observable<Post[]> = new Observable<Post[]>;
    user: Observable<User> = new Observable<User>();
    title: string = '';
    content: string = ''

    constructor(private postService: PostService) {}

  ngOnInit() {
    this.allPosts = this.postService.getAllPosts().pipe(map(posts => posts));
    this.posts = this.allPosts;
  }

  sendPost() {
    if(this.title && this.content) {
      this.allPosts.pipe( 
        map( posts => {
          const newPost: Post = {userId: 1, title: this.title, body: this.content, id: posts.length + 1 }
          posts.unshift(newPost);
          this.title = '';
          this.content = '';
          return posts;
        }),
        ).subscribe(result => { 
          this.allPosts = of(result)
          this.posts = of(result)
        });
    }
  }

  filterPosts(filterValue: string) {
    const isFullNumber: boolean = Number.isInteger(Number(filterValue)) && filterValue !== null
    if(isFullNumber){
      const id = Number(filterValue);
      this.allPosts.pipe( 
        map( posts => { return posts.filter(post => post.userId === id) })
        ).subscribe(result => this.posts = of(result))
    }
  }

  deletePost(e: number) {
    this.allPosts.pipe( 
      map( posts => { return posts.filter(post => post.id !== e)}),
      ).subscribe(result => {
        this.allPosts = of(result);
        this.posts = of(result);
      })
  }
}