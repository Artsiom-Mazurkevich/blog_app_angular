import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { Post, PostService } from '../../services/post.service'

@Component({
   selector: 'app-post',
   templateUrl: './post.component.html',
   styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
   constructor(private postService: PostService) {}
   @Input() post!: Post
   ngOnInit(): void {}

   navigateOnPostPage(postId: string) {
      return this.postService.getOnePost(postId).subscribe(res => console.log(res))
   }
}
