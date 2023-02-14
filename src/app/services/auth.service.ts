import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { catchError, Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   endpoint: string = 'http://localhost:3000/api/'
   // headers = new HttpHeaders().set('Content-Type', 'application/json')
   // currentUser = {}
   constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) {}
   signUp(user: { username: string; email: string; password: string }) {
      let api = `${this.endpoint}/auth/signup`
      return this.http.post(api, user).pipe(catchError(async err => console.log(err)))
   }
   signIn(user: { email: string; password: string }) {
      return this.http
         .post<any>(`${this.endpoint}auth/signin`, user)
         .pipe(catchError(async err => console.warn('Error: ', err)))
         .subscribe(res => {
            this.router.navigate([''])
         })
   }
   // getToken() {
   //    return localStorage.getItem('access_token')
   // }
   // get isLoggedIn(): boolean {
   //    let authToken = localStorage.getItem('access_token')
   //    return authToken !== null ? true : false
   // }
   // doLogout() {
   //    let removeToken = localStorage.removeItem('access_token')
   //    if (removeToken == null) {
   //       this.router.navigate(['log-in'])
   //    }
   // }
   // // User profile
   // getUserProfile(id: any): Observable<any> {
   //    let api = `${this.endpoint}/user-profile/${id}`
   //    return this.http.get(api, { headers: this.headers }).pipe(
   //       map(res => {
   //          return res || {}
   //       }),
   //       catchError(this.handleError)
   //    )
   // }
   // // Error
   // handleError(error: HttpErrorResponse) {
   //    let msg = ''
   //    if (error.error instanceof ErrorEvent) {
   //       // client-side error
   //       msg = error.error.message
   //    } else {
   //       // server-side error
   //       msg = `Error Code: ${error.status}\nMessage: ${error.message}`
   //    }
   //    return throwError(msg)
   // }
}
