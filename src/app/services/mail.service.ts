import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {

   }

  sendEmail(data: any) {
    return this.http.post(`${environment.SERVER_URL}/sendmail`, data);
  }

  //Recaptcha sendToken
  sendToken(token: any) {
    return this.http.post(`${environment.SERVER_URL}/validate`, {recaptcha: token});
  }
}
