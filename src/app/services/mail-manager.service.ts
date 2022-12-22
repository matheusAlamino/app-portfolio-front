import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMailDataContactMe } from 'app/interfaces/imaildata';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailManagerService {
  api: any = environment.api

  constructor(private http: HttpClient) { }

  sendMailContactMe(mailDataContactMe: IMailDataContactMe): Observable<any> {
    return this.http.post<any>(`${this.api.mail_manager}contact-me`, mailDataContactMe);
  }
}
