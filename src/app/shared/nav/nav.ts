import { Component, signal, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faSearch,
  faMoon,
  faSun,
  faClose,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  imports: [FontAwesomeModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  bars = faBars;
  close = faClose;
  search = faSearch;
  angleDown = faAngleDown;
  moon = faMoon;
  sun = faSun;

  isDark = signal<boolean>(false);
  isScrolled = signal(false);
  isOpen = signal(false);

  toggle() {
    this.isOpen.set(!this.isOpen());
  }
  darkMode() {
    this.isDark.set(!this.isDark());
    console.log(this.isDark());

    const theme = localStorage.getItem('theme');
    if (theme !== 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
