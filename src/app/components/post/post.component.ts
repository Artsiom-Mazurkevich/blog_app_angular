import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { Post } from '../../services/post.service'

@Component({
   selector: 'app-post',
   templateUrl: './post.component.html',
   styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
   constructor() {}
   @Input() post!: Post
   ngOnInit(): void {}
}
