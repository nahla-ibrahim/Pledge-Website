import { Component } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  facebook = faFacebookF;
  instagram = faInstagram;
  whatsapp = faWhatsapp;
  linkedin = faLinkedin;
}
