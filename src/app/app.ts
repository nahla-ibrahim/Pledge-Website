import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    console.log(theme);
    console.log(document.documentElement);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }
  protected readonly title = signal('Pledge');
}
