import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private router: Router, private http: HttpClient) {}

  addProfile(addprofileDetails: any, file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('candidateDetails', JSON.stringify(addprofileDetails));
    return this.http
      .post<string>(`candidate/submitProfile`, formData, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getProfilesForScreener(status: any) {
    return this.http.get('candidate/getProfiles/' + status);
  }
  submitFeedBack(submitFeedBackDetails: any): Observable<any> {
    return this.http
      .post<string>(`candidate/submitFeedback`, submitFeedBackDetails, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }
  getProfiles() {
    return this.http.get('candidate/getAllProfiles');
  }

  getCompletedPorfiles(screeningResult: any) {
    return this.http.get('candidate/getCompletedPorfiles/' + screeningResult);
  }
  getCandidateDetailsByUserId(userId: any) {
    return this.http.get('candidate/getCandidateDetailsByUserId/' + userId);
  }
  getCandidateDetailsByScreeningResultAndUserId(userId: any) {
    return this.http.get('candidate/getSelectedCandidateDetails/' + userId);
  }
  getProfileById(id: any) {
    return this.http.get('candidate/getProfileById/' + id);
  }
  getCandidateDetailsByClientUserId(clientuserId: any) {
    return this.http.get(
      'candidate/getCandidateDetailsByClientUserId/' + clientuserId
    );
  }
  getCandidateDetailsByClientUserIdAndStatus(clientuserId: any) {
    return this.http.get(
      'candidate/getCandidateDetailsByClientUserIdAndStatus/' + clientuserId
    );
  }
  getNoticePeriod() {
    return this.http.get('/candidate/getNoticePeriod');
  }

  getCandidateDetailsByScreeningRejectionHyperLink(status: any) {
    this.router.navigate(['/user/profiles', { status: status }]);
  }

  getCandidateDetailsByScreeningRejectionStatus(status: any) {
    return this.http.get('/candidate/getRejectedCandidateDetails/' + status);
  }

  getChangeScreenerDetails() {
    return this.http.get('/candidate/getChangeScreenerDetails');
  }
  changeScreener(changeScreenerDetails: any): Observable<any> {
    return this.http
      .post<string>(`candidate/changeScreener`, changeScreenerDetails, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getScreenerList(roleId: any) {
    return this.http.get('candidate/getScreenerList/' + roleId);
  }
}
