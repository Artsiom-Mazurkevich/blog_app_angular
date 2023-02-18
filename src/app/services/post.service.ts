import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'

export interface Post {
   _id: string
   title: string
   text: string
   authorId: string
   authorName: string
   viewsCount: number
   imageUrl: null | string
   createdAt: string
   updatedAt: string
}

@Injectable({
   providedIn: 'root',
})
export class PostService {
   baseUrl = 'http://localhost:3000/api/'
   constructor(private http: HttpClient) {}

   getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.baseUrl + 'article')
   }

   createPost(post: FormData) {
      const token = localStorage.getItem('access_token')
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.post(`${this.baseUrl}article`, post, { headers: headers })
   }
}
