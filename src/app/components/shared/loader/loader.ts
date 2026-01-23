import { Component, inject } from '@angular/core';
import { Loading } from '../../../services/loading';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
  loadingServ = inject(Loading);
}
