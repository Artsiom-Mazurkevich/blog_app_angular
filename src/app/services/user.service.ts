import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable({
   providedIn: 'root',
})
export class UserService {
   baseUrl = 'http://localhost:3000/api/profile'
   constructor(private http: HttpClient, authService: AuthService) {}

   updateProfileImage(image: FormData) {
      const token = localStorage.getItem('rhbz')
      return this.http.put(this.baseUrl + '/photo', image, { headers: { Authorization: `Bearer ${token}` } })
   }
}
