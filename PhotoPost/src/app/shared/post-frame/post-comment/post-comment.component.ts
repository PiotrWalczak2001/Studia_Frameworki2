import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment';
@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent {
    @Input() comment: Comment | undefined;

  constructor(){}

  ngOnInit() {
  }
}