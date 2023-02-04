import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../../models/album';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-cover',
  templateUrl: './album-cover.component.html',
  styleUrls: ['./album-cover.component.scss'],
})
export class AlbumCoverComponent {
  faEye = faEye;
  viewCount: number = 0;
  user: User | undefined;

  @Input() album: Album | undefined;

  @Output() deleteAlbum: EventEmitter<number> = new EventEmitter<number>();

  constructor(private readonly userService: UserService, private readonly albumService: AlbumService){}

  ngOnInit() {
    this.viewCount = Math.floor(Math.random() * 10000);
    if(this.album?.userId){
      this.userService.getUserById(this.album?.userId).subscribe((data: User) => this.user = data);
    }
  }

  removeAlbum(albumId: number) {
    if(albumId > 0){
      this.deleteAlbum.emit(albumId);
    }
  }
}