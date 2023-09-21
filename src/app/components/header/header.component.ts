import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  entier=15;

  constructor() { }

  ngOnInit(){
    this.entier=12;
  }
}
