import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VimeoApiService {
    api: any = environment.api

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get<any>(`${this.api.vimeo_rest}vimeo/GetAll`).pipe(map((response) => response));
    }
}