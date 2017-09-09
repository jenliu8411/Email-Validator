import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_BASE_URL } from './config';

@Injectable()
export class AppService {

  constructor(private http: Http) {}

  validateEmail(email: string) {
    return this.http.post(API_BASE_URL, {email: email});
  }
}
