import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent implements OnInit {
  theme: string = '';

  constructor() {}

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  toggleTheme(themeselect: string) {
    localStorage.setItem('theme', themeselect);
    document.documentElement.setAttribute('data-theme', themeselect);
  }
}
