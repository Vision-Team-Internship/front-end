import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Floor } from 'src/model';

const httpOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    'auth-token': String(localStorage.getItem('token')),
    // 'auth-token':
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWEwNTY5ZWI1OGM5YWNmOTA4YmVlNzciLCJpYXQiOjE2Mzk0NzQ5MDB9.cIdU9dp_yDBufGfug05nTAmFaEgr1qmUjPZy_LIYZaQ',
  }),
};
interface createdResponse {
  payload: Floor;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  private floorApi = 'https://feedback-project-api.herokuapp.com/api/v1/floors';
  private loginApi = 'https://feedback-project-api.herokuapp.com/login';

  getfloor() {
    return this.http.get<Floor[]>(this.floorApi);
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.loginApi, { email, password });
  }

  createFloor(data: any): Observable<createdResponse> {
    return this.http.post<createdResponse>(this.floorApi, data, httpOption);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.floorApi}/${id}`, httpOption);
  }
}
