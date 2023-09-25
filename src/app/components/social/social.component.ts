import { Component, Input } from '@angular/core';
import { SocialMusic } from 'src/app/models/social_music';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent  {
  @Input() social: SocialMusic | undefined;

}

