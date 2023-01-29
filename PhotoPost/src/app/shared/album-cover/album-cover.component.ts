import { Component, Input } from '@angular/core';
import { Album } from '../../models/album';
import { faEye } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-album-cover',
  templateUrl: './album-cover.component.html',
  styleUrls: ['./album-cover.component.scss'],
})
export class AlbumCoverComponent {
  faEye = faEye;
  viewCount: number = 0;
  @Input() album: Album | undefined;

  constructor(){}

  ngOnInit() {
    this.viewCount = Math.floor(Math.random() * 10000);
  }
}