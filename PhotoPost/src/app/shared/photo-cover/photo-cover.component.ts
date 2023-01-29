import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-cover',
  templateUrl: './photo-cover.component.html',
  styleUrls: ['./photo-cover.component.scss'],
})
export class PhotoCoverComponent {
  @Input() photo: Photo | undefined;

  constructor(){}

  ngOnInit() {
    console.log(this.photo);
  }
}