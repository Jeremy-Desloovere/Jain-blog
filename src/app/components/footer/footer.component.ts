import { Component } from '@angular/core';

export interface Social {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  socials: Social[] = [
    {
      name: 'Github',
      icon: 'fa-square-github',
      url: 'https://github.com/Jeremy-Desloovere/',
    },
    {
      name: 'Twitter',
      icon: 'fa-square-x-twitter',
      url: 'https://twitter.com/jeremydesloovere',
    },
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/jeremy-desloovere/',
    },
  ];
}

