import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router, private http: HttpClient) {}

  getAllUserDetailsByRoleId(roleId: any) {
    return this.http.get('users/usersList/' + roleId);
  }
  getJdDetailsByUserId(userId: any) {
    this.router.navigate(['/user/open-jds/', { userId: userId }]);
  }

  getCandidateDetailsByUserIdhyperLink(userId: any) {
    this.router.navigate(['/user/profiles/', { userId: userId }]);
  }

  getSelectedCandidatehyperLink(userId: any, screeningResult: any) {
    this.router.navigate([
      '/user/profiles/',
      { userId: userId, screeningResult: screeningResult },
    ]);
  }
  getVendorById(id: any) {
    return this.http.get('users/getVendorById/' + id);
  }
  getJdDetailsByClientUserId(clientuserId: any) {
    this.router.navigate(['/user/open-jds/', { clientuserId: clientuserId }]);
  }
  getOpenJdDetailsBasedClientUserIdHyperLink(clientuserId: any, jdStatus: any) {
    this.router.navigate([
      '/user/open-jds/',
      { clientuserId: clientuserId, jdStatus: jdStatus },
    ]);
  }
  getprofilereceivedCountHyperLink(clientuserId: any) {
    this.router.navigate(['/user/profiles/', { clientuserId: clientuserId }]);
  }
  getscreeningSelectCountHyperLink(clientuserId: any, candidateStatus: any) {
    this.router.navigate([
      '/user/profiles/',
      { clientuserId: clientuserId, candidateStatus: candidateStatus },
    ]);
  }
  getVendorUserProfileSubmittedDetails() {
    return this.http.get('users/getVendorUserProfileSubmittedDetails');
  }
}
