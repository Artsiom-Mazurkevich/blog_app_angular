import { Component, DoCheck, OnChanges, OnInit } from '@angular/core'
import { AuthService, IUser } from '../../services/auth.service'

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements DoCheck {
   constructor(private authService: AuthService) {}

   isAuth = false
   user: IUser = {
      _id: '',
      email: '',
      username: '',
   }

   logout() {
      return this.authService.doLogout()
   }

   ngDoCheck(): void {
      this.isAuth = this.authService.isLoggedIn
      this.user = this.authService.userInfo
   }
}
