import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from 'src/app/models/comment';
@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent {
    @Input() comment: Comment | undefined;
    @Output() deleteComment: EventEmitter<number> = new EventEmitter<number>();
    
  constructor(){}

  ngOnInit() {
  }

  deleteCommentClick(commentId: number) {
    if(commentId > 0) {
      this.deleteComment.emit(commentId);
    }
  }
}