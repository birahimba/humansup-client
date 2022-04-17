import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  

  constructor(private httpreq:HttpClient) { }

  sendMessage(body: { email: any; name: any; message: any; }) {
    let headers ={
      headers : new HttpHeaders({
        'content-type' : 'application/json'
      })
    }

    return this.httpreq.post("http://localhost:3000/",body,headers);
  }
}
