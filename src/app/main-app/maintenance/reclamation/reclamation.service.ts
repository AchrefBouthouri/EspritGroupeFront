import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  getAllReclamation() {
    return this.http.get<any>(
      'http://localhost:8081/api/maintenance/reclamation')
      .pipe(map(response => {
        return response;
      }));
  }
}
