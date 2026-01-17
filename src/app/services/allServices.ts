import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { apiTypes } from '../Types';

@Injectable({
  providedIn: 'root',
})
export class allServices {
  private apiUrl = 'assets/data.json';
  private http = inject(HttpClient);

  getData(): Observable<apiTypes> {
    return this.http.get<apiTypes>(this.apiUrl).pipe(
      map((res) => {
        return res;
      }),
      catchError((err: any) => {
        console.log('Error Featching Data');
        return [];
      })
    );
  }
}
