import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'

interface SignUpDTO {
   username: string
   email: string
   password: string
}

@Component({
   selector: 'app-create-account-page',
   templateUrl: './create-account-page.component.html',
   styleUrls: ['./create-account-page.component.css'],
})
export class CreateAccountPageComponent implements OnInit {
   constructor(private authService: AuthService) {}

   newUser: SignUpDTO = {
      email: '',
      password: '',
      username: '',
   }

   signIn() {
      return this.authService.signUp(this.newUser)
   }

   ngOnInit(): void {}
}
