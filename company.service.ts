import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) {}

  getCompany(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addCompany(company: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, company);
  }
}
