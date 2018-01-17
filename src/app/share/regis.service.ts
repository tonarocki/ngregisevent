import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegisService {
  urlregisall = 'http://192.168.201.181:8000/api/regis';
  urluser = 'http://localhost:3001/user/';

  constructor(private http: HttpClient) { }

  getregisall(): Observable<any> {

    return this.http.get<any>(this.urlregisall)
    .catch(
      (errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      }
    );
  }

  getregisbyid(id: any): Observable<any> {
    return this.http.get<any>(this.urlregisall + '/' + id)
    .catch(
      (errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      }
    );
  }

}
