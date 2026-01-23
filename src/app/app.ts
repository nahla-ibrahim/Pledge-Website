import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Home } from './components/Pages/home/home';
import { Loader } from './components/shared/loader/loader';
import { Nav } from './components/shared/nav/nav';
import { Footer } from './components/shared/footer/footer';

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

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }

  protected readonly title = signal('Pledge');
}
