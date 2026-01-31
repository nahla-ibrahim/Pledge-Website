import { Component } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact-us',
  imports: [FaIconComponent],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  facebook = faFacebookF;
  instagram = faInstagram;
  whatsapp = faWhatsapp;
  linkedin = faLinkedin;
}
