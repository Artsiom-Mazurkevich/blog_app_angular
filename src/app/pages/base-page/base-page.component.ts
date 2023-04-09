import { Component, OnInit } from '@angular/core'
import { Post, PostService } from '../../services/post.service'

@Component({
   selector: 'app-base-page',
   templateUrl: './base-page.component.html',
   styleUrls: ['./base-page.component.css'],
})
export class BasePageComponent implements OnInit {
   constructor(private postService: PostService) {}

   posts: Post[] = []

   ngOnInit(): void {
      this.postService.getPosts().subscribe(posts => {
         this.posts = posts
         console.log(posts)
      })
   }
}
