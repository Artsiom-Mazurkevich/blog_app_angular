import { Component, DoCheck, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { PostService } from '../../services/post.service'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
   selector: 'app-create-post-page',
   templateUrl: './create-post-page.component.html',
   styleUrls: ['./create-post-page.component.css'],
})
export class CreatePostPageComponent implements OnInit {
   constructor(private authService: AuthService, private postService: PostService, private formBuilder: FormBuilder) {}

   uploadForm: FormGroup

   ngOnInit() {
      this.uploadForm = this.formBuilder.group({
         image: [''],
         title: [''],
         text: [''],
      })
   }

   onFileSelect(event: any) {
      if (event.target.files.length > 0) {
         const file = event.target.files[0]
         // @ts-ignore
         this.uploadForm.get('image').setValue(file)
      }
   }

   onChangeTitle(event: any) {
      this.uploadForm.get('title')?.setValue(event.target.value)
   }

   onChangeText(event: any) {
      this.uploadForm.get('text')?.setValue(event.target.value)
   }

   onSubmit() {
      const formData = new FormData()
      // @ts-ignore
      formData.append('image', this.uploadForm.get('image').value)
      // @ts-ignore
      formData.append('title', this.uploadForm.get('title').value)
      // @ts-ignore
      formData.append('text', this.uploadForm.get('text').value)

      this.postService.createPost(formData).subscribe(res => console.log(res))
   }
}
