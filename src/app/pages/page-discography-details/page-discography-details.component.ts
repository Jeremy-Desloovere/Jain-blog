import { Component, OnInit } from '@angular/core';
import { Album, albums } from '../../data/discography';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-discography-details',
  templateUrl: './page-discography-details.component.html',
  styleUrls: ['./page-discography-details.component.css'],
})
export class PageDiscographyDetailsComponent implements OnInit {
  album: Album | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));

    console.log(albumIdFromRoute);
    this.album = albums.find((album) => album.id === albumIdFromRoute);
    console.log(this.album)
  }


}
