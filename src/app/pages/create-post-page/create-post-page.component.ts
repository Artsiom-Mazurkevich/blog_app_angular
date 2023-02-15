import { Component, OnDestroy, OnInit } from '@angular/core'
import { Editor } from 'ngx-editor'

@Component({
   selector: 'app-create-post-page',
   templateUrl: './create-post-page.component.html',
   styleUrls: ['./create-post-page.component.css'],
})
export class CreatePostPageComponent implements OnInit, OnDestroy {
   editor: Editor
   html: ''

   ngOnInit(): void {
      this.editor = new Editor()
   }

   // make sure to destory the editor
   ngOnDestroy(): void {
      this.editor?.destroy()
   }
}
