import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-frame',
  templateUrl: './post-frame.component.html',
  styleUrls: ['./post-frame.component.scss'],
})
export class PostFrameComponent {
    comments: Observable<Comment[]> = new Observable<Comment[]>()
    @Input() post: Post | undefined;

  constructor(private commentService: CommentService){}

  ngOnInit() {
    if(this.post?.id){
        this.comments = this.commentService.getCommentsByPostId(this.post?.id);
    }
  }
}