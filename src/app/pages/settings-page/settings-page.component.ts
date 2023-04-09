import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { AuthService } from '../../services/auth.service'
import { FormBuilder } from '@angular/forms'

@Component({
   selector: 'app-settings-page',
   templateUrl: './settings-page.component.html',
   styleUrls: ['./settings-page.component.css'],
})
export class SettingsPageComponent implements OnInit {
   username: string = ''
   avatarUrl: string | undefined

   constructor(private userService: UserService, private authService: AuthService, private fb: FormBuilder) {}

   profileForm = this.fb.group({
      username: [''],
      image: [] as File[],
   })

   onSubmit() {
      console.log(this.profileForm.value)
   }

   handleFileInput(event: Event) {
      let targ = event.target as HTMLInputElement
      // if (targ.files) {
      //    let formData = new FormData()
      //    formData.append('image', targ.files['0'])
      //    this.userService.updateProfileImage(formData).subscribe(res => console.log(res))
      // }
      if (targ.files) {
         this.profileForm.value.image = targ.files['0']
      }
   }

   ngOnInit() {
      this.authService.userInfo.subscribe(res => {
         this.username = res.username
         this.profileForm.value.username = res.username
      })
      this.authService.userInfo.subscribe(res => (this.avatarUrl = res.avatar))
   }
}
