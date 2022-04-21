import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public login(username: string, password: string) {
    return this.httpClient.post('http://92.205.27.150:8007/api/auth/signIn/', { username, password }, {
      headers: new HttpHeaders({
        'X-Api-Key': '6URRxCYt.oOJ87kH3PyotlnWk1BJreZgTedijNnHN'
      })
    });
  }
}
