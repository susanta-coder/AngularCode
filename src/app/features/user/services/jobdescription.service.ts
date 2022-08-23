import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JobdescriptionService {
  constructor(private router: Router, private http: HttpClient) { }
  createJd(jddetails: any, file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('jdCreateRequest', JSON.stringify(jddetails));
    return this.http
      .post<string>(`jd/create`, formData, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getAllUserDetailsByRoleId(roleId: any) {
    return this.http.get('users/usersList/' + roleId);
  }

  getJdDetails() {
    return this.http.get('jd/getJD');
  }

  getJdDetailsByJdId(jdId: any) {
    return this.http.get('jd/getJD/' + jdId);
  }
  createQuery(createqueryDetails: any): Observable<any> {
    return this.http
      .post<string>('jd/query', createqueryDetails, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getJdDetailsByUserId(userId: any) {
    return this.http.get('jd/getJdDetailsByUserId/' + userId);
  }
  getQueryResponse() {
    return this.http.get('jd/getQueries');
  }
  getJdDetailsByClientUserId(clientuserId: any) {
    return this.http.get('jd/getJdDetailsByClientUserId/' + clientuserId);
  }
  getJdDetailsByClientUserIdAndOpenStatus(clientuserId: any) {
    return this.http.get(
      'jd/getJdDetailsByClientUserIdAndOpenStatus/' + clientuserId
    );
  }
  getUserDetais() {
    return this.http.get('users/getUserDetais');
  }

  getStkhrQuery() {
    return this.http.get('jd/getQueries');
  }
  resolveQuery(resolvedqueryDetails: any): Observable<any> {

    return this.http
      .post<string>('jd/resolveQuery', resolvedqueryDetails, {
        responseType: "text" as "json"
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getProfilesCurrentStatusSummary() {
    return this.http.get('/jd/getProfilesCurrentStatusSummary');

       }
}

