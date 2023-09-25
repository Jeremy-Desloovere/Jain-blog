import { Component, OnInit } from '@angular/core';
import { albums } from '../../data/discography';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';
import { SocialMusic } from 'src/app/models/social_music';



@Component({
  selector: 'app-page-discography-details',
  templateUrl: './page-discography-details.component.html',
  styleUrls: ['./page-discography-details.component.css'],
})
export class PageDiscographyDetailsComponent implements OnInit {
  album: Album | undefined;
  music_link: SocialMusic | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));

    this.album = albums.find((album) => album.id === albumIdFromRoute);
    this.music_link = this.album?.social_music;
    console.log(this.music_link);
  }
}
