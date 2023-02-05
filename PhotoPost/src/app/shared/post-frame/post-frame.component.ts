import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { Observable, map, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-post-frame',
  templateUrl: './post-frame.component.html',
  styleUrls: ['./post-frame.component.scss'],
})
export class PostFrameComponent {
    comments: Observable<Comment[]> = new Observable<Comment[]>()
    postAuthor: Observable<User> = new Observable<User>();
    commentsCount: Observable<number> = new Observable<number>();
    commentContent: string = '';
    
    @Input() post: Post | undefined;
    @Output() deletePost: EventEmitter<number> = new EventEmitter<number>();

  constructor(private commentService: CommentService, private userService: UserService){}

  ngOnInit() {
    if(this.post?.id){
        this.postAuthor = this.userService.getUserById(this.post.userId);
        this.comments = this.commentService.getCommentsByPostId(this.post?.id);
        this.commentsCount =this.commentService.getAllCommentsLength();
    }
  }

  sendComment() {
    if(this.commentContent) {
      this.comments.pipe( 
        map( comments => {
          const newComment: Comment = { id: comments.length +1, postId: this.post?.id ?? 0, name: '', email: 'Sincere@april.biz', body: this.commentContent};
          comments.push(newComment);
          this.commentContent = '';
          return comments;
        }),
        ).subscribe(result => this.comments = of(result));
    }
  }

  deleteComment(e: number) {
    this.comments.pipe( 
      map( comments => {return comments.filter(comment => comment.id !== e)}),
      ).subscribe(result => this.comments = of(result))
  }

  deletePostClick(postId: number) {
    if(postId > 0){
      this.deletePost.emit(postId);
    }
  }
}