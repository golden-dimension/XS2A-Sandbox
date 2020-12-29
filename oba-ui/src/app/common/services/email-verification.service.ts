import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {
  private ledgersUrl = `${environment.ledgers}`;

  constructor(private http: HttpClient) {
  }

  verifyEmail(verificationToken: string) {
    return this.http.get(`${this.ledgersUrl}/emails/email`, {
      params: {
        verificationToken: verificationToken
      }
    });
  }
}
