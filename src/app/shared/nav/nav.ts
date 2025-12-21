import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faSearch, faMoon, faClose } from '@fortawesome/free-solid-svg-icons';

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
  light = faMoon;

  isOpen = signal(false);

  toggle() {
    this.isOpen.set(!this.isOpen());
    console.log(this.isOpen());
  }
}
