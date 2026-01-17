import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Home } from './home/home';
import { Loader } from './loader/loader';
import { Nav } from './shared/nav/nav';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Loader, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.remove();
    }
  }
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
