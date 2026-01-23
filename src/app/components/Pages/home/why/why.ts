import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookSkull,
  faGraduationCap,
  faFileExport,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why',
  imports: [FontAwesomeModule],
  templateUrl: './why.html',
  styleUrl: './why.css',
})
export class Why {
  bookSkull = faBookSkull;
  graduationCap = faGraduationCap;
  fileExport = faFileExport;
  userTimes = faUserTimes;
}
