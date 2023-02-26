import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { catchError, Observable } from 'rxjs'

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

   constructor(private http: HttpClient, public router: Router) {}

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
               localStorage.setItem('rhbz', res.access_token)
               this.authToken = `Bearer ${res.access_token}`
               this.router.navigate([''])
            }
         })
   }

   me() {
      const access_token = localStorage.getItem('rhbz')
      if (access_token) {
         this.http
            .get<IUser>(`${this.endpoint}auth/me`, { headers: { Authorization: `Bearer ${access_token}` } })
            .pipe(
               catchError(async err => {
                  if (err) {
                     localStorage.removeItem('rhbz')
                     await this.router.navigate(['signin'])
                  }
               })
            )
            .subscribe(res => {
               if (res) {
                  this.user = res
                  this.authToken = access_token
               }
            })
      }
   }

   doLogout() {
      if (localStorage.getItem('rhbz')) {
         localStorage.removeItem('rhbz')
         this.authToken = ''
         this.router.navigate([''])
      }
      this.authToken = ''
      this.router.navigate([''])
   }

   // @ts-ignore
   get isLoggedIn(): boolean {
      return !!this.authToken
   }

   get userInfo(): IUser {
      return this.user
   }
}
