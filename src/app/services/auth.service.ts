import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { catchError, Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'

export interface IUser {
   _id: string
   email: string
   username: string
   avatar?: string
}

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private endpoint: string = 'http://localhost:3000/api/'

   private authToken = ''
   private user: IUser = {
      _id: '',
      email: '',
      username: '',
      avatar: '',
   }

   constructor(private http: HttpClient, public router: Router, private cookieService: CookieService) {}

   signUp(user: { username: string; email: string; password: string }) {
      let api = `${this.endpoint}auth/signup`
      return this.http
         .post<IUser>(api, user)
         .pipe(catchError(async err => console.log(err)))
         .subscribe(res => {
            if (res) {
               this.user = res
               this.router.navigate(['signin'])
            }
         })
   }

   signIn(user: { email: string; password: string }) {
      return this.http
         .post<{ access_token: string }>(`${this.endpoint}auth/signin`, user)
         .pipe(catchError(async err => console.warn('Error: ', err)))
         .subscribe(res => {
            if (res) {
               localStorage.setItem('access_token', res.access_token)
               this.authToken = `Bearer ${res.access_token}`
               this.router.navigate([''])
            }
         })
   }

   me() {
      return this.http
         .get<IUser>(`${this.endpoint}auth/me`, { headers: { Authorization: this.authToken } })
         .pipe(catchError(async err => console.log(err)))
         .subscribe(res => {
            if (res) {
               this.user = res
            }
         })
   }

   doLogout() {
      if (localStorage.getItem('access_token')) {
         localStorage.removeItem('access_token')
         this.authToken = ''
         this.router.navigate([''])
      }
   }

   // @ts-ignore
   get isLoggedIn(): boolean {
      return !!this.authToken
   }

   set isLoggedIn(token: string) {
      this.authToken = token
   }

   get userInfo(): IUser {
      return this.user
   }
}
