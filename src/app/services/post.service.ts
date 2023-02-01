import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

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
}
