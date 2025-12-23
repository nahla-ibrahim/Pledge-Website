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
  darkMood() {
    this.isDark.set(!this.isDark());
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
