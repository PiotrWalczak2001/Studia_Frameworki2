import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    posts: Observable<Post[]> = new Observable<Post[]>;

    constructor() {}

  ngOnInit() {
  }
}