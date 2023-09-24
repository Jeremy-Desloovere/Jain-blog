import { Component } from '@angular/core';
import { Album, albums } from '../../data/discography';

@Component({
  selector: 'app-page-discography',
  templateUrl: './page-discography.component.html',
  styleUrls: ['./page-discography.component.css'],
})
export class PageDiscographyComponent {
  //import data in a table
  public albums: Album[] = albums;
}

