import { Component } from '@angular/core';
import { albums } from 'src/app/data/discography';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-page-discography',
  templateUrl: './page-discography.component.html',
  styleUrls: ['./page-discography.component.css'],
})
export class PageDiscographyComponent {
  //import data in a table
  public albums: Album[] = albums;
}

