import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  constructor(private http: HttpClient) { }

  senndingMessage(body) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json'
      })
    };
    return this.http.post('http://localhost:3000/email', body, headers);
  }


}
