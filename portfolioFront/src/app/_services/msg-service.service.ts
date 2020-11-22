import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http: HttpClient) { }

  senndingMessage(body) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<ResModule>('http://localhost:3000/email', body, headers);
  }


}

export class ResModule{
  success?: string;
  error?: string;
  msg?: string;
}
