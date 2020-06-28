import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  userLogin(loginDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/login`,loginDetail)
  }

  addUser(userDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/register`,userDetail);
  }

  sendmail(userDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/check-user`,userDetail)
  }

  updatepwd(pwdDetail,string):Observable<any>{
    return this.http.put(`${environment.apiUrl}/reset-password/${string}`,pwdDetail)
  }

  activateUser(string):Observable<any>{
    return this.http.put(`${environment.apiUrl}/activateuser`,string)
  }

  location():Observable<any>{
    return this.http.get("https://extreme-ip-lookup.com/json/").pipe(
      catchError(err=>{
        alert(err.error.message)
        return throwError(err)
      })
    )
  }

  getUrl(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/urlList/${localStorage.responseId}`).pipe(
      catchError(err =>{
        alert(err.error.message)
        return throwError(err);
      })
    )
  }
  getLinkCount(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/chartData/${localStorage.responseId}`).pipe(
      catchError(err =>{
        alert(err.error.message)
        return throwError(err);
      })
    )
  }

  addUrl(urlDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/shortUrl`,urlDetail);
  }

}


