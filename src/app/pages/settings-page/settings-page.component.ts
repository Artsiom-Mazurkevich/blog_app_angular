import { Component, DoCheck, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { AuthService } from '../../services/auth.service'

@Component({
   selector: 'app-settings-page',
   templateUrl: './settings-page.component.html',
   styleUrls: ['./settings-page.component.css'],
})
export class SettingsPageComponent {
   constructor(private userService: UserService, authService: AuthService) {}

   handleFileInput(event: Event) {
      let targ = event.target as HTMLInputElement
      if (targ.files) {
         let formData = new FormData()
         formData.append('image', targ.files['0'])
         this.userService.updateProfileImage(formData).subscribe(res => console.log(res))
      }
   }
}
