import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'

interface LoginDTO {
   email: string
   password: string
}

@Component({
   selector: 'app-login-page',
   templateUrl: './login-page.component.html',
   styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
   constructor(private authService: AuthService) {}

   userData: LoginDTO = {
      email: '',
      password: '',
   }

   login() {
      console.log(this.userData)
      this.authService.signIn(this.userData)
   }

   ngOnInit(): void {}
}
