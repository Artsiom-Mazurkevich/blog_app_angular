import { Component, DoCheck, OnChanges, OnInit } from '@angular/core'
import { AuthService, IUser } from '../../services/auth.service'
import { Observable, Subscription } from 'rxjs'
import { info } from 'autoprefixer'

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
   isAuth: boolean
   user: IUser

   constructor(private authService: AuthService) {}

   ngOnInit() {
      this.authService.userInfo.subscribe(info => (this.user = info))
      this.authService.isLoggedIn.subscribe(isLoggedIn => (this.isAuth = isLoggedIn))
   }

   isOpenMenu = false

   toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu
   }

   logout() {
      return this.authService.doLogout()
   }

   // ngDoCheck(): void {
   //    this.isAuth = this.authService.isLoggedIn
   //    // @ts-ignore
   //    this.user = this.authService.userInfo
   // }
}
