import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
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
   baseUrl = 'http://localhost:3000/api/article'
   constructor(private http: HttpClient) {}

   getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.baseUrl)
   }

   getOnePost(postId: string) {
      return this.http.get<Post>(this.baseUrl + `/${postId}`)
   }

   createPost(post: FormData) {
      const token = localStorage.getItem('rhbz')
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.post(this.baseUrl, post, { headers: headers })
   }
}
